const mongoose = require("mongoose");
const User = require("./User");
const { Schema } = mongoose;
const dateFormat = require("../utils/dateFormat");

const coachSchema = new Schema({
  userProfile: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  /* studentsEnrolledArray: [
    {
      studentsEnrolled: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },
  ], */

  /* studentsEnrolled: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ], */

  enrolledStudents: [
    {
      username: { type: String, required: false },
      email: {
        type: String,
        required: false,
      },
    },
  ],

  coachname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  sport: {
    type: String,
    required: false,
  },
  groupSize: {
    type: String,
    required: false,
  },
  duration: {
    type: String,
    required: false,
  },

  /* fees: {
    type: String,
    required: false,
  }, */
  fees: {
    type: Number,
    required: true,
    min: 0.99,
  },
  sessionStart: {
    type: Date,
    required: false,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  /* days: [
    {
      type: String,
      required: false,
    },
  ], */

  days: [
    {
      dayValue: { type: String, required: false },
      dayId: {
        type: String,
        required: false,
      },
    },
  ],
  timeSlot: [
    {
      slotValue: { type: String, required: false },
      slotId: {
        type: String,
        required: false,
      },
    },
  ],

  venuePostalCode: {
    type: String,
    required: true,
    default: 4000,
  },
});

const Coach = mongoose.model("Coach", coachSchema);

module.exports = Coach;
