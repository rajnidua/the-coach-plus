const mongoose = require("mongoose");
const User = require("./User");
const Coach = require("./Coach");
const { Schema } = mongoose;

const coachReviewsSchema = new Schema({
  userProfile: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  coachProfile: [
    {
      type: Schema.Types.ObjectId,
      ref: "Coach",
    },
  ],
  stars: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
});

const CoachReviews = mongoose.model("CoachReviews", coachReviewsSchema);

module.exports = CoachReviews;
