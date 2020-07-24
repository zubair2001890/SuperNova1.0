import React from "react";
import Nav from "../../../components/account/Layout/Nav";

export default function MainNav() {
  return (
    <Nav
      links={[
        {
          to: "/",
          children: "Backed Projects",
        },
        {
          to: "/my-projects",
          children: "My Projects",
        },
        {
          to: "/activity",
          children: "Activity",
        },
        {
          to: "/profile",
          children: "Profile",
        },
      ]}
    />
  );
}
