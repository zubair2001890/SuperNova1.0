import { Schema } from "mongoose";

export const Team = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  role: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 2000,
  },
  bio: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 2000,
  },
});
