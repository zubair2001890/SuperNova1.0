import { model } from "mongoose";
import {Schema} from "mongoose";

export const SubField = model('SubField', new Schema({
    subfieldName : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    subfieldID : {
        type: Number,
        required: true,
        },
    fieldName : {
        type: String,
        required: true,
        }
}));