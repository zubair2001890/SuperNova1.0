import { model } from "mongoose";
import {Schema} from "mongoose";


const Project = model('Project', new Schema({
    projectName : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    projectDescription : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2000 // Arbitrary number, I thought 2,000 characters should be enough.
    },
    universityText : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    startDate: {
        type: Date,
        required: true
    },
    goal: {
        type: Number,
        requred: true
    },
    totalPledged: {
        type: Number,
        requred: true
    },
    numberBackers: {
        type: Number,
        requred: true
    },
    projectStatusID: {
        type: Number,
        requred: true
    },
    fieldID: {
        type: Number,
        requred: true
    },
    subfieldID: {
        type: Number,
        requred: true
    },
    projectScientistID: {
        type: Number,
        requred: true
    },
    projectImageText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    }
}));

exports.Project = Project;