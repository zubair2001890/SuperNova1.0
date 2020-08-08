import { model } from "mongoose";
import { Schema } from "mongoose";

export const ProjectDescription = model('ProjectDescription', new Schema({
    aims: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    context: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    whyIsItImportant: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    additionalInfo: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
}));