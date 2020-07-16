import { model } from "mongoose";
import {Schema} from "mongoose";

const Field = model('Field', new Schema({
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
        type: Number,
        required: true,
        },
}));

exports.Field = Field;