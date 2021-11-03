const mongoose = require("mongoose");

const { Schema } = mongoose;

const studentSchema = new Schema({
  age: {
    type: String,
    required: true,
    trim: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  coaches: [
    {
      type: Schema.Types.ObjectId,
      ref: "Coach",
    },
  ],
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
