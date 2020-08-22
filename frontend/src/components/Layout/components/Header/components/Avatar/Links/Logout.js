import React from "react";
import NavItem from "./NavItem";
import { useAuth0 } from "@auth0/auth0-react";

export default function Logout() {
  const { logout } = useAuth0();
  return (
    <NavItem Component="button" onClick={logout}>
      Logout
    </NavItem>
  );
}
