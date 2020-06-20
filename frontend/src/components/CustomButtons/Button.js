import React from "react";

import { Button } from "@material-ui/core/";

// core components

// import buttonStyle from "./buttonStyle.js";

const RegularButton = React.forwardRef((props) => {
  return <Button>{props.children}</Button>;
});

export default RegularButton;
