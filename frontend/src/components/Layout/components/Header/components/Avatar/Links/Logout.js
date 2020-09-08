import React from "react";
import NavItem from "./NavItem";
import auth from "../../../../../../../Auth";

export default function Logout() {
  return (
    <NavItem Component="button" onClick={auth.logout}>
      Logout
    </NavItem>
  );
}
