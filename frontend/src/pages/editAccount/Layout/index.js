import React from "react";
import AccountLayout from "../../../components/account/Layout";
import Nav from "./Nav";

export default function Layout(props) {
  return (
    <AccountLayout
      mainTitle="Edit Profile"
      Nav={Nav}
      {...props}
    ></AccountLayout>
  );
}
