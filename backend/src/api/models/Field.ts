import { model, Schema } from "mongoose";

const fieldSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

model("fields", fieldSchema);
