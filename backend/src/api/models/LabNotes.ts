import { model } from "mongoose";
import {Schema} from "mongoose";

export const LabNotes = model('LabNotes', new Schema({
    projectID : {
        type: Number,
        required: true,
        },
    labnotesText : {
        type: Array,
        required: true,
        },
        ts : {
        type: Number,
        required: true // Unix timestamp.        
        }
}));