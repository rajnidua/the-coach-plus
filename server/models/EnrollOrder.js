const mongoose = require("mongoose");

const { Schema } = mongoose;

const enrollOrderSchema = new Schema({
  enrollDate: {
    type: Date,
    default: Date.now,
  },
  enrolledList: [],
  /* coaches: [
    {
      type: Schema.Types.ObjectId,
      ref: "Coach",
    },
  ], */
});

const EnrollOrder = mongoose.model("EnrollOrder", enrollOrderSchema);

module.exports = EnrollOrder;
