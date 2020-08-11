import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import Links from "./Links";
import { fetchAccount } from "../../../../../../store/account";
import { getPictureUrl } from "../../../../../../helpers/imageUrl";

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
  const { user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const toggleOpen = () => setIsOpen(!isOpen);
  useEffect(() => {
    fetchAccount(user.sub);
  }, []);
  if (!account) return null;
  const fullImageUrl = getPictureUrl(account.imageURL);
  return (
    <button onClick={toggleOpen} className={classes.avatar}>
      <img src={fullImageUrl} alt="Profile picture" className={classes.image} />
      {isOpen && <Links />}
    </button>
  );
}

const mapStateToProps = ({ account }) => ({ account });

export default connect(mapStateToProps, { fetchAccount })(Avatar);
