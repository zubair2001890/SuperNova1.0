import { model } from 'mongoose'
import { Schema } from 'mongoose'

export const UserAccount = model(
  'UserAccount',
  new Schema({
    firstName: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 64,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 64,
    },
    projectsSupported: {
      type: Number,
      default: 0,
    },
    totalAmountPledged: {
      type: Number,
      default: 0,
    },
    university: {
      type: String,
      minLength: 1,
      maxlength: 255,
    },
    dateJoined: {
      type: Date,
      default: Date.now,
    },
    bio: {
      type: String,
      minlength: 1,
      maxlength: 2000, // 2,000 characters is an arbitrary number, I thought it should be enough.
    },
    imageURL: {
      type: String,
      minlength: 1,
      maxlength: 2000, // 2,000 characters is an arbitrary number, I thought it should be enough.
    },
    projectScientistID: {
      type: Number,
      required: false,
    },
    fieldName: {
      type: String,
    },
    id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  })
)
