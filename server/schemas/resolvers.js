const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    //students: async () => Student.find(),
    //coaches: async () => Coach.find(),
    //users: async () => User.find(),
    /* users: async (parent, args, { models }) => {
      return await models.User.find({});
    }, */
    /* coaches: (parent, args, context) => {
      if (!context.user || !context.user.roles.includes("Coach")) return null;
      return context.models.Coach.getAll();
    }, */
    users: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user.id);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
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
