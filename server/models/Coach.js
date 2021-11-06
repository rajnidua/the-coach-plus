const mongoose = require("mongoose");
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

  //userAttached: [User.schema],
});

const Coach = mongoose.model("Coach", coachSchema);

module.exports = Coach;

//module.exports = coachSchema;
