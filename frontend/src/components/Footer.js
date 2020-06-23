import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
    BottomNavigation,
    BottomNavigationAction,
    Grid,
    Box,
    Link,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
    Facebook as FacebookIcon,
    Twitter as TwitterIcon,
    Instagram as InstagramIcon,
    LinkedIn as LinkedInIcon
} from "@material-ui/icons";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    icon: {
        color: "white",
    },
    bottomNavBar: {
        backgroundColor: "black",
        // TODO: Import colour from palette
        paddingTop: "1%",
    },
    footer: { // TODO: This will eventually contain the entire footer, including "SUPERNOVA" and the 12 site links
        width: "100%",
        position: "absolute",
        bottom: "0",
        backgroundColor: "black",
    },
    regularLink: {
        color: "white",
        fontSize: "18px",
    },
    boldLink: {
        color: "white",
        fontWeight: "bold",
        fontSize: "20px",
    },
    gridItem: {
        textAlign: "center",
    },
    gridRow: {
        alignItems: "center",
        paddingTop: "2%",
        paddingBottom: "1%",
    },
    footerTitle: {
        color: "white",
        fontWeight: "bold",
        fontSize: "33px",
        fontFamily: "Roboto",
    },
    whiteLine: {
        position: "relative",
        width: "70%",
        height: "2px",
        backgroundColor: "white",
    },
    whiteLineContainer: {
        display: "flex",
        justifyContent: "center",
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <Grid container className={classes.gridRow}>
                <Grid item xs={4} className={classes.whiteLineContainer}>
                    <Box className={classes.whiteLine}></Box>
                </Grid>
                <Grid item xs={4}>
                    <Typography className={ clsx(classes.footerTitle, classes.gridItem) }>SUPERNOVA</Typography>
                </Grid>
                <Grid item xs={4} className={classes.whiteLineContainer}>
                    <Box className={classes.whiteLine}></Box>
                </Grid>
            </Grid>
            <Grid container className={classes.gridRow}>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link
                        component={RouterLink}
                        to="/"
                        className={classes.boldLink}
                    >
                        ABOUT
                    </Link>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link
                        component={RouterLink}
                        to="/"
                        className={classes.boldLink}
                    >
                        CREATE
                    </Link>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link
                        component={RouterLink}
                        to="/"
                        className={classes.boldLink}
                    >
                        EXPLORE
                    </Link>
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.gridRow}>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link
                        component={RouterLink}
                        to="/"
                        className={classes.regularLink}
                    >
                        Our Mission
                    </Link>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link
                        component={RouterLink}
                        to="/"
                        className={classes.regularLink}
                    >
                        Upload a Project
                    </Link>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link
                        component={RouterLink}
                        to="/"
                        className={classes.regularLink}
                    >
                        Browse Projects
                    </Link>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link
                        component={RouterLink}
                        to="/"
                        className={classes.regularLink}
                    >
                        T&Cs
                    </Link>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link
                        component={RouterLink}
                        to="/"
                        className={classes.regularLink}
                    >
                        Create Account
                    </Link>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link
                        component={RouterLink}
                        to="/"
                        className={classes.regularLink}
                    >
                        Funded Projects
                    </Link>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link
                        component={RouterLink}
                        to="/"
                        className={classes.regularLink}
                    >
                        Our Model
                    </Link>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link
                        component={RouterLink}
                        to="/"
                        className={classes.regularLink}
                    >
                        Contact Us
                    </Link>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Link
                        component={RouterLink}
                        to="/"
                        className={classes.regularLink}
                    >
                        FAQ
                    </Link>
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
