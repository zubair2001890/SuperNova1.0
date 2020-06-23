import React from "react";
import {
    BottomNavigation,
    BottomNavigationAction,
    Grid,
    Divider,
    Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
    Facebook as FacebookIcon,
    Twitter as TwitterIcon,
    Instagram as InstagramIcon,
    LinkedIn as LinkedInIcon
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    icon: {
        color: "white",
    },
    bottomNavBar: {
        backgroundColor: "black",
        // TODO: Import colour from palette
    },
    footer: { // TODO: This will eventually contain the entire footer, including "SUPERNOVA" and the 12 site links
        width: "100%",
        position: "absolute",
        bottom: "0",
        backgroundColor: "black",
    },
    regularLink: {
        color: "white",
    },
    boldLink: {
        color: "white",
    },
    gridItem: {
        textAlign: "center",
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <Grid container style={{ paddingBottom: "3%", paddingTop: "3%"}}>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link className={classes.boldLink} className={classes.boldLink}>ABOUT</Link>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link className={classes.boldLink}>CREATE</Link>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link className={classes.boldLink}>EXPLORE</Link>
                </Grid>
            </Grid>
            <Grid container spacing={2} style={{ paddingBottom: "2%"}}>
                <Grid item xs={4} className={classes.gridItem} className={classes.gridItem}>
                    <Link className={classes.regularLink} className={classes.regularLink}>Our Mission</Link>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link className={classes.regularLink}>Upload a Project</Link>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link className={classes.regularLink}>Browse Projects</Link>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link className={classes.regularLink}>T&Cs</Link>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link className={classes.regularLink}>Create Account</Link>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link className={classes.regularLink}>Funded Projects</Link>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link className={classes.regularLink}>Our Model</Link>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link className={classes.regularLink}>Contact Us</Link>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link className={classes.regularLink}>FAQ</Link>
                </Grid>
            </Grid>
            <BottomNavigation className={classes.bottomNavBar}>
                <BottomNavigationAction className={classes.icon} icon={<FacebookIcon />} />
                <BottomNavigationAction className={classes.icon} icon={<TwitterIcon />} />
                <BottomNavigationAction className={classes.icon} icon={<InstagramIcon />} />
                <BottomNavigationAction className={classes.icon} icon={<LinkedInIcon />} />
            </BottomNavigation>
        </div>
    )
}
