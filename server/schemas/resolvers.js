const { AuthenticationError } = require("apollo-server-express");
const { Mongoose } = require("mongoose");
const { User, Coach } = require("../models");
const coachSchema = require("../models/Coach");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("coachProfile");
    },
    coaches: async () => {
      return Coach.find();
    },

    user: async (parent, { username }) => {
      return User.findOne({ username: username }).populate("coachProfile");
    },

    coachDetail: async (parent, { coachname }) => {
      const params = coachname ? { coachname } : {};
      return Coach.findOne(params).populate("userProfile");
    },

    coach: async (parent, { coachId }) => {
      return Coach.findOne({ _id: coachId }).populate("userProfile");
    },

    me: async (_, __, context) => {
      console.log(context.user);
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("coachProfile");
      }
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      console.log(args);
      const user = await User.create(args.input);
      const token = signToken(user);

      return { token, user };
    },

    addCoach: async (parent, args, context) => {
      console.log("context in add coach is ");
      console.log(context.user);
      console.log("The args is ");
      console.log(args);
      if (context.user) {
        const coach = await Coach.create({
          coachname: context.user.username,
          ...args.input,
          userProfile: context.user._id,
        });

        console.log("user coach is: ");
        console.log(context.user._id);
        console.log(coach._id);
        const filter = { _id: context.user._id };
        const update = { coachProfile: coach._id };

        const result = await User.findOneAndUpdate(filter, update, {
          returnOriginal: false,
        });
        console.log("result is:");
        console.log(result);
        console.log("result end");

        return coach;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    /* addCoach: async (parent, { description, image, fees }, context) => {
      console.log("context in add coach is ");
      console.log(context.user);
      if (context.user) {
        const coach = await Coach.create({
          coachname: context.user.username,
          description,
          image,
          fees,
          userProfile: context.user._id,
        });

        console.log("user coach is: ");
        console.log(context.user._id);
        console.log(coach._id);
        const filter = { _id: context.user._id };
        const update = { coachProfile: coach._id };

        const result = await User.findOneAndUpdate(filter, update, {
          returnOriginal: false,
        });
        console.log("result is:");
        console.log(result);
        console.log("result end");

        return coach;
      }
      throw new AuthenticationError("You need to be logged in!");
    }, */

    login: async (parent, { email, password }) => {
      console.log(email);
      console.log(password);
      const user = await User.findOne({ email });
      //console.log(user);
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials ,password");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
