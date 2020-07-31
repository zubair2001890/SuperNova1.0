import React, { useState } from "react";
import icon from "./icon.png";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

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
  defaultPicture,
  handleChange,
  variant,
  pictureClass = null,
  iconClass = null,
}) {
  const [picture, setPicture] = useState(defaultPicture);
  const classes = useStyles();
  return (
    <div className={classes.avatarForm}>
      <Avatar src={picture} variant={variant} className={pictureClass}></Avatar>
      <div className={iconClass}>
        <img src={icon} alt="Camera icon" className={classes.iconImage} />
      </div>
      <input
        onChange={handleChange(setPicture)}
        className={classes.input}
        type="file"
      ></input>
    </div>
  );
}
