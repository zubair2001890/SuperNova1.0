import React from "react";
import { post } from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core";
import BaseAvatarForm from "../../../components/AvatarForm";
import { icon } from "../../../styles/form";

const handleChange = (setPicture) => async (event) => {
  const { data } = await post("https://supernova.ac/users/id", {
    imageURL: event.target.files[0],
  });
  return setPicture(data.imageURL);
};

const useStyles = makeStyles((theme) => {
  const pictureSize = "8rem";
  const pictureSizeLg = "12.875rem";
  return {
    picture: {
      width: pictureSize,
      height: pictureSize,
      [theme.breakpoints.up("lg")]: {
        width: pictureSizeLg,
        height: pictureSizeLg,
      },
    },
    icon,
  };
});

export default function AvatarForm() {
  const { user } = useAuth0();
  const classes = useStyles();
  return (
    <BaseAvatarForm
      handleChange={handleChange}
      defaultPicture={user.picture}
      variant="circle"
      pictureClass={classes.picture}
      iconClass={classes.icon}
    ></BaseAvatarForm>
  );
}
