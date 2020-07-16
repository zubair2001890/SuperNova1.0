import { model } from "mongoose";
import { Schema } from "mongoose";

const ProjectBacker = model('ProjectBacker', new Schema({
    projectID: {
        type: Number,
        required: true
    },
    userAccountID: {
        type: Number,
        required: true
    },
    pledged: {
        type: Number,
        required: true
    },
    ts: { // the Unix timestamp.
        type: Number,
        required: true
    }
}));

exports.ProjectBacker = ProjectBacker;