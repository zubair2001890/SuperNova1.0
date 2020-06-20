import React from "react";

export default function Form(props) {
  const formStyle = {
    fontFamily: "Roboto,Helvetica,Arial,sans-serif",
    fontWeight: "300",
    lineHeight: "1.5em",
    textAlign: "left",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: ".875rem",
    webkitTapHighlightColor: "transparent",
    boxSizing: " border-box",
    webkitFontSmoothing: "antialiased",
    flex: "1 1 auto",
    padding: "0.9375rem 1.875rem",
  };
  const inputStyle = {
    webkitFontSmoothing: "antialiased",
    font: "inherit",
    width: "100%",
    border: "0",
    margin: "0",
    display: "block",
    padding: "6px 0 7px",
    minWidth: "0",
    background: "none",
    boxSizing: "content-box",
    animationName: "mui-auto-fill-cancel",
    letterSpacing: "inherit",
    webkitTapHighlightColor: "transparent",
    color: "#495057",
    height: "unset",
    opacity: "1",
    fontSize: "14px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "400",
    lineHeight: "1.42857",
  };
  const labelStyle = {
    webkitfontSmoothing: "antialiased",
    font: "inherit",
    width: "100%",
    border: "0",
    margin: "0",
    display: "block",
    padding: "6px 0 7px",
    minWidth: "0",
    background: "none",
    boxSizing: "content-box",
    animationName: "mui-auto-fill-cancel",
    letterSpacing: "inherit",
    webkitTapHighlightColor: "transparent",
    color: "#495057",
    height: "unset",
    opacity: "1",
    fontSize: "14px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "400",
    lineHeight: "1.42857",
  };

  return (
    <div>
      <form style={formStyle}>
        <label style={labelStyle}>First Name</label>
        <input style={inputStyle}></input>
        <input style={inputStyle}></input>
      </form>
    </div>
  );
}
