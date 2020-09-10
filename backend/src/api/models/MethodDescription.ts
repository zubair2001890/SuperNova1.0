import { Schema } from "mongoose";

export const MethodDescription = new Schema({
  methodsAndTechniques: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 2000,
  },
  equipment: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 2000,
  },
  furtherComments: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 2000,
  },
});
