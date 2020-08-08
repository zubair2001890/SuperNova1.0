import { model } from "mongoose";
import { Schema } from "mongoose";

export const Timeline = model('Timeline', new Schema({
    milestone: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2000
    },
    target: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2000
    },
    whatWillBeAchieved: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2000
    },
    allcationOfFunds: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2000
    }
}));