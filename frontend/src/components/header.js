import React from 'react';
import { AppBar, Typography, IconButton, Button, Toolbar, Box, Link, Avatar } from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../images/Stellated-Dodecahedron-white.png";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        backgroundColor: "black",
        opacity: 1, // Change to zero once background image is added
    },
    menuButton: {
        marginRight: 16,
        marginLeft: -12,
        color: "white",
    },
    link: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        color: "white",
    },
    rightToolbar: {
        marginLeft: "auto",
        marginRight: -12,
    },
    logo: {
        marginLeft: "44%",
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <header>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <IconButton className={classes.menuButton} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <IconButton className={classes.logo} aria-label="logo">
                        <Avatar src={logo} />
                    </IconButton>
                    <Typography className={classes.rightToolbar}>
                        <Link href="#" className={classes.link}>EXPLORE</Link>
                        <Link href="#" className={classes.link}>LOG IN</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
    )
}
