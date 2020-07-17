import { model } from "mongoose";
import {Schema} from "mongoose";

export const Field = model('Field', new Schema({
    fieldName : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    projectID : {
        type: Number,
        required: true,
        },
    userAccountID : {
        type: String,
        required: true,
        minlength : 1,
        maxlength : 1000 // An arbitrary number, I would find it hard to imagine a user ID being longer than 1,000 characters.
        },
}));