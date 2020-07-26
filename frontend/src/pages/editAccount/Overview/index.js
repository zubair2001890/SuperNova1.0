import React from "react";
import Layout from "../Layout";
import Form from "./Form";
import AvatarForm from "./AvatarForm";

export default function Overview() {
  return (
    <Layout title="Overview">
      <Form />
      <AvatarForm />
    </Layout>
  );
}
