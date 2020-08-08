import { model } from "mongoose";
import { Schema } from "mongoose";
import {MethodDescription} from "./MethodDescription"
import {ProjectDescription} from "./ProjectDescription"


export const Project = model('Project', new Schema({
    projectName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },

    projectDescription: {
        type: ProjectDescription,
        required: true,
    },

    university: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },

    labNotes: {
        type: Array,
        required: false
    },

   startDate: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 10
    },
    goal: {
        type: Number,
        requred: true
    },
    totalPledged: {
        type: Number,
        requred: true
    },
    backers: {
        type: Array,
        requred: true
    },
    statusName: {
        type: String,
        requred: true
    },
    subfieldID: {
        type: Number,
        requred: true
    },
    projectScientistID: {
        type: String, // As it's going to be the ID of scientist, and therefore a String.
        requred: true
    },
    projectImage: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    teamDescription: {
        type: Array,
        required: false,
    },
    methodDescription: {
        type: MethodDescription,
        required: true,
    },
    timelineDescription: {
        type: Array,
        required: false,
    },
    fieldName: {
        type: String,
        required: true,
        minlength: 1,
        maxLength: 200
    },
    subfieldName: {
        type: String,
        required: true,
        minlength: 1,
        maxLength: 200
    },
    link: {
        type: Array,
        required: true,
    }

}));