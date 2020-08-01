import React from "react";
import { post } from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core";
import BaseAvatarForm from "./PictureForm";
import { icon } from "../styles/form";

const handleChange = (setPicture) => async (event) => {
  const { data } = await post("https://supernova.ac/users/id", {
    imageURL: event.target.files[0],
  });
  return setPicture(data.imageURL);
};

const useStyles = makeStyles({
  icon,
});

export default function AvatarForm({ pictureClass }) {
  const {
    user = { picture: "https://randomuser.me/api/portraits/men/31.jpg" },
  } = useAuth0();
  const classes = useStyles();
  return (
    <BaseAvatarForm
      handleChange={handleChange}
      defaultPicture={user.picture}
      variant="circle"
      pictureClass={pictureClass}
      iconClass={classes.icon}
    ></BaseAvatarForm>
  );
}
