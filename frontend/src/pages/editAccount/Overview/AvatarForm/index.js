import React from "react";
import Avatar from "@material-ui/core/Avatar";
import icon from "./icon.png";
import { connect } from "react-redux";
import { post, put } from "axios";
import auth from "../../../../Auth";
import { makeStyles } from "@material-ui/core";
import { postUpdateAccount } from "../../../../store/slices/middlewareAPI/fetchAPI";
import { getPictureUrl } from "../../../../helpers/imageUrl";
import { fetchAccount } from "../../../../store/account";

const getExtension = (fileName = "") => {
  const match = fileName.match(/.+\.(\w+)/);
  if (match) {
    return match[1];
  }
  return "png";
};

const getSignedUrl = async (token, file) => {
  const fileInfo = {
    contentType: file.type,
    extension: getExtension(file.name),
  };
  const requestConfigWithToken = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await post(
    "/api/private/upload/",
    fileInfo,
    requestConfigWithToken
  );
  return data;
};

const uploadImage = async (file, url) => {
  await put(url, file, {
    headers: {
      "Content-Type": file.type,
    },
  });
};

const updateProfileImage = async (key, token) => {
  postUpdateAccount({ imageURL: key }, token);
};

const uploadImageAndUpdateAccount = async (getAccessTokenSilently, event) => {
  const [file] = event.target.files;
  const token = await getAccessTokenSilently();
  const { url, key } = await getSignedUrl(token, file);
  await uploadImage(file, url);
  await updateProfileImage(key, token);
};

const handleChange = (fetchAccountWithSub, getAccessTokenSilently) => async (
  event
) => {
  await uploadImageAndUpdateAccount(getAccessTokenSilently, event);
  await fetchAccountWithSub();
};

const useStyles = makeStyles((theme) => {
  const pictureSize = "8rem";
  const pictureSizeLg = "12.875rem";
  const iconOffset = "0.8125rem";
  const iconSize = "4.25rem";
  const iconImageSize = "2.5rem";
  return {
    avatarForm: {
      position: "relative",
      order: 0,
      marginBottom: "3rem",
      marginRight: "auto",
      [theme.breakpoints.up("md")]: {
        order: 1,
        marginBottom: 0,
      },
    },
    picture: {
      width: pictureSize,
      height: pictureSize,
      [theme.breakpoints.up("lg")]: {
        width: pictureSizeLg,
        height: pictureSizeLg,
      },
    },
    input: {
      opacity: 0,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    icon: {
      position: "absolute",
      bottom: `calc( -1 * ${iconSize} + ${iconSize} - ${iconOffset})`,
      right: iconOffset,
      width: iconSize,
      height: iconSize,
      border: "1px solid #707070",
      backgroundColor: "white",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    iconImage: {
      width: iconImageSize,
      height: iconImageSize,
    },
  };
});

function AvatarForm({ account, fetchAccount }) {
  const getAccessTokenSilently = auth.getAccessToken;
  const user = auth.getUserInfo();
  const fullPictureUrl = getPictureUrl(account.imageURL);
  const classes = useStyles();
  const fetchAccountWithSub = () => fetchAccount(user.sub);
  return (
    <div className={classes.avatarForm}>
      <Avatar
        src={fullPictureUrl}
        variant="circle"
        className={classes.picture}
      ></Avatar>
      <div className={classes.icon}>
        <img src={icon} alt="Camera icon" className={classes.iconImage} />
      </div>
      <input
        onChange={handleChange(fetchAccountWithSub, getAccessTokenSilently)}
        className={classes.input}
        type="file"
      ></input>
    </div>
  );
}

const mapStateToProps = ({ account }) => ({ account });

export default connect(mapStateToProps, { fetchAccount })(AvatarForm);
