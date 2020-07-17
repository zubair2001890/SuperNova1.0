import { model } from "mongoose";
import { Schema } from "mongoose";

const ProjectStatus = model('ProjectStatus', new Schema({
    projectID: {
        type: Number,
        required: true
    },
    statusName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 64
    },
}));

exports.ProjectStatus = ProjectStatus;