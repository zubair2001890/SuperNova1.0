import { model } from "mongoose";
import {Schema} from "mongoose";

export const Comment = model('Comment', new Schema({
    projectID : {
        type: Number,
        required: true
        },
    commentText : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2000 // An arbitrary number, I think that 2,000 characters should be enough.
        },
    ts: {
        type: Number, // The unix timestamp for a comment.
        required: true
    }      
}));