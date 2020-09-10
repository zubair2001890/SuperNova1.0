import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import icon from "./icon.png";
import { connect } from "react-redux";
import { post, put } from "axios";
import { AuthContext } from "../../../../AuthContext";
import { makeStyles } from "@material-ui/core";
import { postUpdateAccount } from "../../../../store/slices/middlewareAPI/fetchAPI";
import { getPictureUrl } from "../../../../helpers/imageUrl";
import { fetchAccount } from "../../../../store/account";
import AWS from "aws-sdk";

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

const updateProfileImage = async (file, token) => {
  if (file.size > 100000000) //I.e. 100MB
  {
    throw new Error("The image is too large.");
    return;
  }
  const s3 = new AWS.S3({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY
  });

  const params = {
    Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
    Key: Date.now().toString() + "." + getExtension(file.name),
    Body: file
  };
// Uploading files to the bucket
s3.upload(params, function(err, data) {
  if (err) {
      throw err;
  }
  if (data.Location)
  {
    postUpdateAccount({ imageURL: data.Location }, token);
    return data.Location;
  }
});
}

const uploadImageAndUpdateAccount = async (getAccessTokenSilently, event) => {
  const [file] = event.target.files;
  const token = await getAccessTokenSilently();
  updateProfileImage(file, token);
};

const handleChange = (getAccessTokenSilently) => async (
  event
) => {
  await uploadImageAndUpdateAccount(getAccessTokenSilently, event);
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
  const auth = useContext(AuthContext);
  const getAccessTokenSilently = auth.getAccessToken;
  const user = auth.getUserInfo();
  const fullPictureUrl = getPictureUrl(account.imageURL);
  const classes = useStyles();
  const fetchAccountWithSub = () => fetchAccount(user.sub);
  return (
    <div className={classes.avatarForm}>
      <Avatar
        src={account.imageURL}
        variant="circle"
        className={classes.picture}
      ></Avatar>
      <div className={classes.icon}>
        <img src={icon} alt="Camera icon" className={classes.iconImage} />
      </div>
      <input
        onChange={handleChange(getAccessTokenSilently)}
        className={classes.input}
        type="file"
      ></input>
    </div>
  );
}

const mapStateToProps = ({ account }) => ({ account });

export default connect(mapStateToProps, { fetchAccount })(AvatarForm);
