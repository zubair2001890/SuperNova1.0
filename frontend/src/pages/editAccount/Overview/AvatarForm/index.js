import React, { useState } from "react";
import icon from "./icon.png";
import { makeStyles } from "@material-ui/core";
import { post } from "axios";
// import { useAuth0 } from "@auth0/auth0-react";
import Avatar from "@material-ui/core/Avatar";

const handleChange = (setPicture) => async (event) => {
  const { data } = await post("https://supernova.ac/users/id", {
    imageURL: event.target.files[0],
  });
  return setPicture(data.imageURL);
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

export default function AvatarForm() {
  // const { user } = useAuth0();
  const user = {
    picture: "https://randomuser.me/api/portraits/men/31.jpg",
  };
  const [picture, setPicture] = useState(user.picture);
  const classes = useStyles();
  return (
    <div className={classes.avatarForm}>
      <Avatar
        src={picture}
        variant="circle"
        className={classes.picture}
      ></Avatar>
      <div className={classes.icon}>
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
