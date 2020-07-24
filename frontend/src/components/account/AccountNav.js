import React from "react";
import Nav from "./Layout/Nav";
import { getEditPath } from "../../helpers/createPaths";

export default function AccountNav() {
  return (
    <Nav
      links={[
        {
          to: getEditPath("/overview"),
          children: "Overview",
        },
        {
          to: getEditPath("/settings"),
          children: "Account Settings",
        },
      ]}
    />
  );
}
