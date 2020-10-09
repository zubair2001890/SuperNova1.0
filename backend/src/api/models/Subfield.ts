import { model } from "mongoose";
import { Schema } from "mongoose";

export const Subfield = model(
  "SubField",
  new Schema({
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    field: {
      type: String,
      required: true,
    },
  })
);
