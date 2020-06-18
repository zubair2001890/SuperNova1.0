import React from 'react';
import { Grid, Paper, makeStyles, Typography, Box, Button, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <Box bgcolor="white" color="background.paper">
                <Grid container spacing={5}>
                    <Grid item xs={4}>
                        <Box bgcolor="black" color="primary.contrastText" p={2}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography color="primary" align="center">SUPERNOVA</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Box bgcolor="black" color="primary.contrastText" p={2}/>
                    </Grid>
                    <Grid item xs={4} container justify="center">
                        <Button variant="text" component={Link || "a"}>ABOUT</Button>
                    </Grid>
                    <Grid item xs={4} container justify="center">
                        <Button variant="text" component={Link || "a"}>CREATE</Button>
                    </Grid>
                    <Grid item xs={4} container justify="center" container justify="center">
                        <Button variant="text" component={Link || "a"}>EXPLORE</Button>
                    </Grid>
                    <Grid item xs={4} container justify="center">
                        <Button variant="text" component={Link || "a"}>Our Mission</Button>
                    </Grid>
                    <Grid item xs={4} container justify="center">
                        <Button variant="text" component={Link || "a"}>Upload a Project</Button>
                    </Grid>
                    <Grid item xs={4} container justify="center">
                        <Button variant="text" component={Link || "a"}>Browse Projects</Button>
                    </Grid>
                    <Grid item xs={4} container justify="center">
                        <Button variant="text" component={Link || "a"}>T&Cs</Button>
                    </Grid>
                    <Grid item xs={4} container justify="center">
                        <Button variant="text" component={Link || "a"}>Create Account</Button>
                    </Grid>
                    <Grid item xs={4} container justify="center">
                        <Button variant="text" component={Link || "a"}>Funded Projects</Button>
                    </Grid>
                    <Grid item xs={4} container justify="center">
                        <Button variant="text" component={Link || "a"}>Our Model</Button>
                    </Grid>
                    <Grid item xs={4} container justify="center">
                        <Button variant="text" component={Link || "a"}>Contact Us</Button>
                    </Grid>
                    <Grid item xs={4} container justify="center">
                        <Button variant="text" component={Link || "a"}>FAQ</Button>
                    </Grid>
                </Grid>
            </Box>
    </footer>
    )
}
