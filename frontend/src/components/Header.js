import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
    AppBar,
    Typography,
    IconButton,
    Toolbar,
    Link,
    Avatar,
    Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import paths from "../constants/paths";
import logo from "../images/Stellated-Dodecahedron-white.png"

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "black",
        opacity: 1, // Change to zero once background image is added
    },
    flexHeader: {
        display: "flex",
        width: "100%",
    },
    menuButton: {
        color: "white",
        alignSelf: "center",
        flex: 1,
    },
    menuIcon: {
        color: "white",
    },
    link: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        color: "white",
    },
    rightToolbar: {
        alignSelf: "center",
        display: "flex",
        justifyContent: "flex-end",
        flex: 1,
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        flex: 1,
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <header>
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Box className={classes.flexHeader}>
                    <Box className={classes.menuButton}>
                        <IconButton className={classes.menuIcon} aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box className={classes.logo}>
                        <IconButton aria-label="logo">
                            <Avatar src={logo}/>
                        </IconButton>
                    </Box>
                    <Box className={classes.rightToolbar}>
                        <Typography >
                            <Link
                            component={RouterLink}
                            to={paths.explore}
                            className={classes.link}
                            >
                            EXPLORE
                            </Link>
                            <Link
                            component={RouterLink}
                            to={paths.login}
                            className={classes.link}
                            >
                            LOG IN
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
        </header>
    );
}
