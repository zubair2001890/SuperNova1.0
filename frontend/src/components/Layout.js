import React from "react";
import Header from "./Header";

export default ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
