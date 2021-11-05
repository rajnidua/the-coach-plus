/* const mongoose = require("mongoose");
const User = require("./User");
const { Schema } = mongoose;

const coachSchema = new Schema({
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
    required: true,
    min: 0.99,
  },

  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  /* students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    }, 
  ],*/
/* reviews: {
    type: Schema.Types.ObjectId,
    ref: "Review",
  }, */

/* schedule: {
    type: Schema.Types.ObjectId,
    ref: "Schedule",
    required: true,
  }, 
});

const Coach = mongoose.model("Coach", coachSchema);

module.exports = Coach;
 */
