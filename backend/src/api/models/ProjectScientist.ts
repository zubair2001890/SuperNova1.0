import { model } from "mongoose";
import { Schema } from "mongoose";

export const ProjectScientist = model('ProjectScientist', new Schema({
    projectID: {
        type: Number,
        required: true
    },
    ts: { // The unix timestamp.
        type: Number,
        required: true
    },
    userAccountID: {
        type: Number,
        required: true
    }
}));