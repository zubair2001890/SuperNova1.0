import React from "react";
import BaseAvatarForm from "../../../components/AvatarForm";
import { makeStyles } from "@material-ui/core";

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
  };
});

export default function AvatarForm() {
  const classes = useStyles();
  return <BaseAvatarForm pictureClass={classes.picture} />;
}
