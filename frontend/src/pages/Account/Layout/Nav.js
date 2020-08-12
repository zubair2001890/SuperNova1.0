import React from "react";
import Nav from "../../../components/account/Layout/Nav";
import paths from "../../../constants/paths";

export default function MainNav() {
  return (
    <Nav
      links={[
        {
          to: paths.account,
          children: "Backed Projects",
        },
        {
          to: paths.myProjects,
          children: "My Projects",
        },
        {
          to: paths.activity,
          children: "Activity",
        },
        {
          to: paths.profile,
          children: "Profile",
        },
      ]}
    />
  );
}
