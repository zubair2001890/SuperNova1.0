import { model } from "mongoose";
import {Schema} from "mongoose";


export const Project = model('Project', new Schema({
    projectName : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    
    projectDescription : {
        type: Array,
        required: true,
        minlength: 1,
        maxlength: 2000 // Arbitrary number, I thought 2,000 characters should be enough.
    },
    university : {
        type: String,
        required: false, // Required is set to false for university because a university is not specified
        // in the sample payload for create project in Apiary.
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
    subfieldId: {
        type: String,
        requred: true
    },
    projectScientistId: {
        type: Number,
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
    methodsDescription: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2000 // An arbitrary number, I thought 2,000 characters should be enough.   
    },
    timelineDescription: {
        type: Array,
        required: false,
    }
    }));