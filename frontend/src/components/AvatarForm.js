import React from "react";
import { connect } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core";

import BaseAvatarForm from "./PictureForm";
import { icon } from "../styles/form";
import { postUpdateAccount } from "../store/slices/middlewareAPI/fetchAPI";
import { fetchAccount } from "../store/account";

const updateProfileImage = async (key, token) =>
  postUpdateAccount({ imageURL: key }, token);

const useImage = (fetchAccountWithSub) => async (imageKey, token) => {
  await updateProfileImage(imageKey, token);
  await fetchAccountWithSub();
};

const useStyles = makeStyles({
  icon,
});

function AvatarForm({ pictureClass, fetchAccount, account, ...other }) {
  const { user } = useAuth0();
  const classes = useStyles();
  const fetchAccountWithSub = () => fetchAccount(user.sub);
  return (
    <BaseAvatarForm
      imageKey={account.imageURL}
      variant="circle"
      pictureClass={pictureClass}
      iconClass={classes.icon}
      useImage={useImage(fetchAccountWithSub)}
      {...other}
    ></BaseAvatarForm>
  );
}

const mapStateToProps = ({ account }) => ({ account });

export default connect(mapStateToProps, { fetchAccount })(AvatarForm);
