import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import Links from "./Links";
import { fetchAccount } from "../../../../../../store/account";
import { getPictureUrl } from "../../../../../../helpers/imageUrl";
import { getProfile } from "../../../../../../store/slices/middlewareAPI/fetchAPI";
import auth from "../../../../../../Auth";

const useStyles = makeStyles(() => {
  const avatarSize = "3.875rem";
  return {
    avatar: {
      border: 0,
      padding: 0,
      backgroundColor: "transparent",
      cursor: "pointer",
      position: "relative",
    },
    image: {
      width: avatarSize,
      height: avatarSize,
      borderRadius: "50%",
    },
  };
});

function Avatar({ fetchAccount, account }) {
  const user = auth.getUserInfo();
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const toggleOpen = () => setIsOpen(!isOpen);
  useEffect(() => {
    // console.log("Fetching user profile");
    // fetchAccount(user.sub);
    getProfile(user.sub);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!account || !Object.keys(account).length) {
    // console.log("No account on backend, using Auth0 profile");
    return (
      <div onClick={toggleOpen} className={classes.avatar}>
        <img src={user.picture} alt="User profile" className={classes.image} />
        {isOpen && <Links />}
      </div>
    );
  } else {
    const fullImageUrl = getPictureUrl(account.imageURL);
    // console.log("Using backend profile");
    // console.log("Image URL is: " + fullImageUrl);
    return (
      <div onClick={toggleOpen} className={classes.avatar}>
        <img src={fullImageUrl} alt="User profile" className={classes.image} />
        {isOpen && <Links />}
      </div>
    );
  }
}

const mapStateToProps = ({ account }) => ({ account });

export default connect(mapStateToProps, { fetchAccount })(Avatar);
