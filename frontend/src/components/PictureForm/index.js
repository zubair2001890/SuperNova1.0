import React from "react";
import { put, post } from "axios";
import icon from "./icon.png";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { useAuth0 } from "@auth0/auth0-react";
import { getPictureUrl } from "../../helpers/imageUrl";

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

const uploadImageAndGetKey = async (token, event) => {
  const [file] = event.target.files;
  const { url, key } = await getSignedUrl(token, file);
  await uploadImage(file, url);
  return key;
};

const handleChange = (getAccessTokenSilently, useImage) => async (event) => {
  event.persist();
  const token = await getAccessTokenSilently();
  const key = await uploadImageAndGetKey(token, event);
  await useImage(key, token);
};

const useStyles = makeStyles((theme) => {
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
    input: {
      opacity: 0,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    iconImage: {
      width: iconImageSize,
      height: iconImageSize,
    },
  };
});

export default function AvatarForm({
  imageKey,
  useImage,
  variant,
  pictureClass = null,
  iconClass = null,
}) {
  const classes = useStyles();
  const { getAccessTokenSilently } = useAuth0();
  const fullImageUrl = getPictureUrl(imageKey);
  return (
    <div className={classes.avatarForm}>
      <Avatar
        src={fullImageUrl}
        variant={variant}
        className={pictureClass}
      ></Avatar>
      <div className={iconClass}>
        <img src={icon} alt="Camera icon" className={classes.iconImage} />
      </div>
      <input
        onChange={handleChange(getAccessTokenSilently, useImage)}
        className={classes.input}
        type="file"
      ></input>
    </div>
  );
}
