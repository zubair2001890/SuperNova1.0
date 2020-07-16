import { model } from "mongoose";
import { Schema } from "mongoose";

const University = model('University', new Schema({
    universityName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
}));

exports.University = University;