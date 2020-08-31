import { model } from "mongoose";
import { Schema } from "mongoose";

export const LabNote = model('LabNote', new Schema({
    labCommentary: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2000
    },
    media: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2000
    },
    date: { // Because it's in the form 08112020
        type: String,
        required: true,
        minlength: 1,
        maxlength: 8
    },
}));