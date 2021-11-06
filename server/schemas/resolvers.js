const { AuthenticationError } = require("apollo-server-express");
const { Mongoose } = require("mongoose");
const { User, Coach } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("coachProfile");
    },
    coaches: async () => {
      return Coach.find();
    },
    /* coach: async (_, args, context) => {
      console.log(context.user);
      if (context.user) {
        return Coach.findOne({ _id: context.user._id });
      }
    }, */
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("coachProfile");
    },
    /* user: async (parent, { username }) => {
      return User.findOne({ username }).populate("coachProfile");
    }, */

    coachDetail: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Coach.find(params);
    },

    coach: async (parent, { coachId }) => {
      return Coach.findOne({ _id: coachId });
    },

    me: async (_, __, context) => {
      console.log(context.user);
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("coachProfile");
      }
    },

    /* coach: async (parent, { id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user.id).populate({
          coach,
        });

        return user.coach.id(id);
      }

      throw new AuthenticationError("Not logged in");
    }, */
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    /*  addCoach: async (parent, { coachInput }, context) => {
      console.log("context is:");
      console.log(coachInput);
      try {
        if (context.user) {
          const user = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { coach: coachInput } },
            { new: true, runValidators: true }
          );
          console.log(user);
          return user;
        }
      } catch (err) {
        console.log(err);
        throw new AuthenticationError("An unexpected error occured");
      }
    }, */

    /* addCoach: async (parent, { coachInput }, context) => {
      console.log("context user is :");
      console.log(context);
      console.log("coachInput argument:");
      console.log(coachInput);
      if (context.user) {
        const coach = new Coach({ coachInput });
        console.log("coach object is ");
        console.log(coach);
        await User.findByIdAndUpdate(context.user.id, {
          $push: { coach: coach },
        });
        console.log("coachUpdate is :");
        console.log(coach);
        return coach;
      }

      throw new AuthenticationError("Not logged in");
    }, */

    addCoach: async (parent, { description, image, fees }, context) => {
      if (context.user) {
        const coach = await Coach.create({
          coachname: context.user.username,
          description,
          image,
          fees,
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
        // console.log(coach);
        return coach;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

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
