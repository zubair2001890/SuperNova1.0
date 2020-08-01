import React from "react";
import TextArea from "../TextArea";

export default function TeamBio({ member, ...other }) {
  return (
    <TextArea name={`${member}.bio`} label="Team Bio" {...other}></TextArea>
  );
}
