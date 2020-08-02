import React from "react";
import Layout from "../Layout";
import TextAreaLg from "../TextAreaLg";
import Save from "../Save";
import UploadMedia from "./UploadMedia";

export default function LabNotes() {
  return (
    <Layout title="Lab Notes">
      <TextAreaLg label="Lab Commentary" name="labCommentary" />
      <Save />
      <UploadMedia />
    </Layout>
  );
}
