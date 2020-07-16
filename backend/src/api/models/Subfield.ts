import { model } from "mongoose";
import {Schema} from "mongoose";

const SubField = model('SubField', new Schema({
    subFieldName : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    projectID : {
        type: Number,
        required: true,
        },
    fieldID : {
        type: Number,
        required: true,
        },
}));

exports.SubField = SubField;