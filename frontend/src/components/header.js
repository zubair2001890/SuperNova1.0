import React from 'react';
import { AppBar, Typography, IconButton, Button, Toolbar, Box, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: theme.spacing("100%"),
        justifyContent: "space-between",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    link: {
        flexGrow: 1,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <header className={classes.root}>
            <AppBar className={classes.root} position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography>
                        <Link href="#" className={classes.link} color="inherit">EXPLORE</Link>
                        <Link href="#" className={classes.link} color="inherit">LOG IN</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
    )
}
