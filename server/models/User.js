const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");
//const Student = require("./Student");
//const Coach = require("./Coach");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },

  role: {
    type: String,
    required: false,

    /* validate: {
      isIn: [["Student", "Coach"]],
    }, */
  },
  //orders: [Order.schema],
});

// Set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  console.log("password is " + password);
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
