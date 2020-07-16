import { model } from "mongoose";
import { Schema } from "mongoose";

const Parameters = model('Parameters', new Schema({
    projectID: {
        type: Number,
        required: true
    },
    goal: {
        type: Number,
        required: true
    },
    ts: {
        type: Number,
        required: true
    }
}));

exports.Parameters = Parameters;