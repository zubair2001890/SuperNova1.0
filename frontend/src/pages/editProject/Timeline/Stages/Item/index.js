import React from "react";
import TextArea from "./TextArea";
import Group from "./Group";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 600,
    fontSize: "1.25rem",
    letterSpacing: "-0.08px",
    marginTop: "4.900625rem",
  },
});

export default function Item({ stage, member }) {
  const getName = (name) => `${member}.${name}`;
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.title}>Stage {stage}:</h2>
      <Grid container justify="space-between">
        <Grid item xs={12} md={6}>
          <Group
            label="Milestone"
            name={getName("milestone")}
            placeholder="e.g. Purchase of necessary equipment and data acquisition."
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Group
            label="Target"
            type="number"
            placeholder="$500"
            name={getName("target")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextArea
            name={getName("achievement")}
            label="What will be achieved in this stage"
            placeholder="e.g. In Stage 1, I aim to procure all the required software for the project and will begin initial scouting of ..."
          />
        </Grid>
        <Grid item xs={12}>
          <TextArea
            label="Explain how the funds will be allocated in this stage"
            name={getName("description")}
          ></TextArea>
        </Grid>
      </Grid>
    </div>
  );
}
