import { model } from "mongoose";
import { Schema } from "mongoose";

const Update = model('Update', new Schema({
    projectID: {
        type: Number,
        required: true
    },
    updateText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2000 // An arbitrary number, I think that 2,000 characters should be enough.
    },
    ts: { // A Unix timestamp.
        type: Number,
        required: true,
    }
}));

exports.Update = Update;