import { model } from "mongoose";
import {Schema} from "mongoose";


export const UserAccount = model('UserAccount', new Schema({
    firstName : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 64
    },
    lastName : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 64
    },
    password : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    email : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 128
    },
    projectsSupported : {
        type: Number,
        required: true
    },
    totalAmountPledged : {
        type: Number,
        required: true
    },
    universityID : {
        type: String,
        required: true,
        minLength: 1,
        maxlength: 255
    },
    dateJoined : {
        type: Date,
        required: true
    },
    bio : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2000 // 2,000 characters is an arbitrary number, I thought it should be enough.
    },
    imageURL : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2000 // 2,000 characters is an arbitrary number, I thought it should be enough.
    },
    projectScientistID : {
        type: Number,
        required: false
    },
    fieldID : {
        type: Number,
        required: true
    }
}));