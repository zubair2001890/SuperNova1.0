import React from "react";
import Nav from "../../../components/EditLayout/Nav";
import paths from "../../../constants/paths";

export default function AccountNav() {
  return (
    <Nav
      links={[
        {
          to: paths.overview,
          children: "Overview",
        },
        {
          to: paths.settings,
          children: "Account Settings",
        },
      ]}
    />
  );
}
