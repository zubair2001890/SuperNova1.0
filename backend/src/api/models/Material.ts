import { model } from "mongoose";
import { Schema } from "mongoose";

export const Material = model('Material', new Schema({
    projectID: {
        type: String,
        required: true
    },
    materialTypeID: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2000 // An arbitrary number, I think that 2,000 characters should be enough.
    },
    link: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2000 // An arbitrary number, I think that 2,000 characters should be enough.
    },
}));

exports.Material = Material;