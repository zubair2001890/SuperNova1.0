import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { post } from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from "@material-ui/core/Avatar";

const handleChange = (setPicture) => async (event) => {
  const { data } = await post("https://supernova.ac/users/id", {
    imageURL: event.target.files[0],
  });
  return setPicture(data.imageURL);
};

const useStyles = makeStyles((theme) => ({
  avatarForm: {
    width: "100%",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      flexBasis: "30%",
    },
  },
  input: {
    visibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
}));

export default function AvatarForm() {
  const { user } = useAuth0();
  const [picture, setPicture] = useState(user.picture);
  const styles = useStyles();
  return (
    <div className={styles.avatarForm}>
      <Avatar src={picture} variant="rounded"></Avatar>
      <input
        onChange={handleChange(setPicture)}
        className={styles.input}
        type="file"
      ></input>
    </div>
  );
}
