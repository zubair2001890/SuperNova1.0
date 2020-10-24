import React, { useContext } from "react";
import NavItem from "./NavItem";
import { AuthContext } from "../../../../../../../AuthContext";

export default function Logout() {
  const auth = useContext(AuthContext);
  return (
    <NavItem Component="button" onClick={auth.logout}>
      Logout
    </NavItem>
  );
}
