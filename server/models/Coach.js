const mongoose = require("mongoose");

const { Schema } = mongoose;

const coachSchema = new Schema({
  description: {
    type: String,
  },
  image: {
    type: String,
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  /* reviews: {
    type: Schema.Types.ObjectId,
    ref: "Review",
  }, */
  fees: {
    type: Number,
    required: true,
    min: 0.99,
  },
  /* schedule: {
    type: Schema.Types.ObjectId,
    ref: "Schedule",
    required: true,
  }, */
});

const Coach = mongoose.model("Coach", coachSchema);

module.exports = Coach;
