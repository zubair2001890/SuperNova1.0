import React from "react";
import { FieldArray } from "redux-form";
import { makeStyles, Grid } from "@material-ui/core";
import Layout from "../Layout";
import Stages from "./Stages";
import AddStage from "./AddStage";
import Total from "./Total";
import Save from "../Save";

const useStyles = makeStyles((theme) => ({
  subheadline: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 600,
    fontSize: "1.25rem",
    letterSpacing: "0.2px",
  },
  description: {
    fontFamily: "AvertaDemo",
    fontSize: "1.25rem",
    marginTop: "1rem",
  },
  footer: {
    marginTop: "7.275625rem",
    marginBottom: "5.424375rem",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
}));

function Timeline({ fields }) {
  const classes = useStyles();
  return (
    <>
      <p className={classes.subheadline}>
        Split the project down into a minimum of 3 stages.
      </p>
      <p className={classes.description}>
        Break your total funding goal into targets for each Stage. Once you have
        raised the funds for Stage 1, you can commence your research whilst you
        continue to raise for further stages. By showing people what you have
        achieved with early donations, it will be easier for you to raise to
        complete the project.
      </p>
      <Stages fields={fields} />
      <Grid item xs={12}>
        <div className={classes.footer}>
          <AddStage push={fields.push} />
          <Total />
        </div>
      </Grid>
      <Save />
    </>
  );
}

export default function TimelineFieldArray() {
  return (
    <Layout title="Timeline and Budget">
      <FieldArray component={Timeline} name="timelineDescription" />
    </Layout>
  );
}
