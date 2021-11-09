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
  fees: {
    type: Number,
    required: false,
    min: 0.99,
  },
  sessionStart: {
    type: Date,
    required: false,
    default: Date.now,
  },
  classDuration: {
    type: Number,
    required: false,
  },
  classFrequency: {
    type: String,
    required: false,
  },
  frequencyNum: {
    type: Number,
    required: false,
  },
});

const Coach = mongoose.model("Coach", coachSchema);

module.exports = Coach;
