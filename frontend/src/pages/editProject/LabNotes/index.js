import React from "react";
import Layout from "../Layout";
import TextAreaLg from "../TextAreaLg";
import Save from "../Save";
import UploadMedia from "./UploadMedia";
import { Grid } from "@material-ui/core";

export default function LabNotes() {
  return (
    <Layout title="Lab Notes">
      <Grid item xs={12}>
        <TextAreaLg label="Lab Commentary" name="labNotes" />
      </Grid>
      <Save />
      <UploadMedia />
    </Layout>
  );
}
