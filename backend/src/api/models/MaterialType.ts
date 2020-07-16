import { model } from "mongoose";
import { Schema } from "mongoose";

const MaterialType = model('MaterialType', new Schema({
    typeName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 32
    }
}));

exports.MaterialType = MaterialType;