import React from "react";
import Members from "./Members";
import Layout from "../Layout";
import Avatar from "./Avatar";

export default function Team() {
  return (
    <Layout title="Team">
      <Members />
      <Avatar />
    </Layout>
  );
}
