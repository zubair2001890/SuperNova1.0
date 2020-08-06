import { model } from "mongoose";
import {Schema} from "mongoose";

export const ProjectBacker = model('ProjectBacker', new Schema({
    projectID : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    userAccountID : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    pledged: {
        type: Number,
        required: true
    },
    ts: { // The unix timestamp.
        type: Number,
        required: true
    },
    backerKey: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    }
}));