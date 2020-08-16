import React from "react";
import Layout from "../Layout";
import Form from "./Form";
import SaveButton from "../Save";
import ProjectImage from "./ProjectImage";
import Video from "./Video";

export default function Overview() {
  return (
    <Layout title="Overview">
      <Form />
      <ProjectImage />
      <Video />
      <SaveButton />
    </Layout>
  );
}
