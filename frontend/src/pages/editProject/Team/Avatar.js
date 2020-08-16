import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import AvatarForm from "../../../components/AvatarForm";
// import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => {
  const pictureSize = "9.375rem";
  return {
    formContainer: {
      display: "flex",
      justifyContent: "start",
    },
    picture: {
      width: pictureSize,
      height: pictureSize,
      marginRight: "auto",
      [theme.breakpoints.up("md")]: {
        marginLeft: "auto",
      },
    },
    name: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "1.25rem",
      fontWeight: "bold",
    },
  };
});

export default function Avatar() {
  // const {
  //   user,
  // } = useAuth0();
  // const name = `${given_name} ${family_name}`;
  const classes = useStyles();
  return (
    <Grid item xs={12} md="auto">
      <div className={classes.formContainer}>
        <AvatarForm pictureClass={classes.picture} />
      </div>
      <p className={classes.name}>Will Yun-Farnbrough</p>
    </Grid>
  );
}
