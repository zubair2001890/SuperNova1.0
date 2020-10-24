import React, { useState, useEffect, useContext } from "react";
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles, Button } from "@material-ui/core";
import Links from "./Links";
import { fetchAccount } from "../../../../../../store/account";
import { getPictureUrl } from "../../../../../../helpers/imageUrl";
import { AuthContext } from "../../../../../../AuthContext";
import paths from "../../../../../../constants/paths";

const useStyles = makeStyles((theme) => {
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
    logoutButton: {
      ...theme.mixins.navLinkPrimary,
      [theme.breakpoints.down("sm")]: {
        fontSize: 12,
      },
    },
  };
});

function Avatar({ fetchAccount, account }) {
  const auth = useContext(AuthContext);
  const user = auth.getUserInfo();
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const toggleOpen = () => setIsOpen(!isOpen);
  useEffect(() => {
    const user = auth.getUserInfo();
    if (user !== undefined) {
      fetchAccount(user.sub);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.arrived]);
  if (user === undefined) {
    return (
      <Button
        color="inherit"
        onClick={auth.logout}
        component={RouterLink}
        to={paths.home}
        size="large"
        className={classes.logoutButton}
      >
        LOG OUT
      </Button>
    );
  }
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
