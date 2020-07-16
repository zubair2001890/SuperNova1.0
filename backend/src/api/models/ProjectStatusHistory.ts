import { model } from "mongoose";
import { Schema } from "mongoose";

const ProjectStatusHistory = model('ProjectStatusHistory', new Schema({
    projectID: {
        type: Number,
        required: true
    },
    projectStatusID: {
        type: Number,
        required: true
    },
    ts: { // The Unix timestamp.
        type: Number,
        required: true
    }
}));

exports.ProjectStatusHistory = ProjectStatusHistory;