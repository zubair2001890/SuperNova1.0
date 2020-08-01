import { model } from "mongoose";
import {Schema} from "mongoose";

export const ProjectBacker = model('ProjectBacker', new Schema({
    projectID : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    userAccountID : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    pledged: {
        type: Number,
        required: true
<<<<<<< HEAD
=======
    },
    ts: { // The unix timestamp.
        type: Number,
        required: true
>>>>>>> 86164e3b8c9125e188061fb0af886930bfd0c43e
    }
}));