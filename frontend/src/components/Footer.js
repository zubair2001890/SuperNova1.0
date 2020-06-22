import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon } from "@material-ui/icons";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    icon: {
        color: "white",
    },
    bottomNavBar: {
        backgroundColor: "black",
    },
    footer: { // This will eventually contain the entire footer, including "SUPERNOVA" and the 12 site links
        width: "100%",
        position: "absolute",
        bottom: "0",
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <BottomNavigation className={classes.bottomNavBar}>
                <BottomNavigationAction className={classes.icon} icon={<FacebookIcon />} />
                <BottomNavigationAction className={classes.icon} icon={<TwitterIcon />} />
                <BottomNavigationAction className={classes.icon} icon={<InstagramIcon />} />
                <BottomNavigationAction className={classes.icon} icon={<LinkedInIcon />} />
            </BottomNavigation>
        </div>
    )
}
