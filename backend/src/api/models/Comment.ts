import { model } from "mongoose";
import {Schema} from "mongoose";

export const Comment = model('Comment', new Schema({
    projectID : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    commentText : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    ts: { // The unix timestamp.
        type: Number,
        required: true
    }
}));