const mongoose = require("mongoose");
const User = require("./User");
const { Schema } = mongoose;

const coachSchema = new Schema({
  userProfile: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
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

  fees: {
    type: String,
    required: false,
  },
  sessionStart: {
    type: Date,
    required: false,
    default: Date.now,
  },
  days: {
    type: [String],
    required: false,
  },
  timeSlot: {
    type: [String],
    required: false,
  },

  /* classDuration: {
    type: Number,
    required: false,
  }, */
  /* classFrequency: {
    type: String,
    required: false,
  },
  frequencyNum: {
    type: Number,
    required: false,
  }, */
});

const Coach = mongoose.model("Coach", coachSchema);

module.exports = Coach;
