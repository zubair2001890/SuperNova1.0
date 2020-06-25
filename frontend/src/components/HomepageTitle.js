import React from "react";
import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: "avaMeridian",
        textAlign: "center",
        fontSize: "7.45vw",
        letterSpacing: 10.01,
    },
}));

export default function HomepageTitle() {
    const classes = useStyles();

    return (
        <>
            <Typography className={classes.title}>SUPERNOVA</Typography>
        </>
    )
}
