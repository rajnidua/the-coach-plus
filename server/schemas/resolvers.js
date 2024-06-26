const { AuthenticationError } = require("apollo-server-express");
const { Mongoose } = require("mongoose");
const { User, Coach, EnrollOrder } = require("../models");
const coachSchema = require("../models/Coach");
const { signToken } = require("../utils/auth");
require("dotenv").config();
const stripeKey = process.env.STRIPE_SECRET_KEY;

const stripe = require("stripe")(stripeKey);

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
    enrollOrder: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          populate: "enrollOrders.coaches",
        });

        return user.enrollOrders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },

    checkout: async (_, __, context) => {
      const url = new URL(context.headers.referer).origin;
      console.log("context headers referer is: " + context.headers.referer);
      console.log("new url object : " + url);
      const userDetail = await User.findOne({
        _id: context.user._id,
      });

      console.log("user Details is ", userDetail);

      const enrollOrder = new EnrollOrder({
        enrolledList: userDetail.programsEnrolled,
      });
      console.log("enrollOrder is ", enrollOrder);
      const line_items = [];
      console.log(
        "enrollOrder enrolledList length is " + enrollOrder.enrolledList.length
      );
      for (let i = 0; i < enrollOrder.enrolledList.length; i++) {
        const product = await stripe.products.create({
          name: enrollOrder.enrolledList[i].coachname,
          description: enrollOrder.enrolledList[i].description,
        });

        console.log("product is " + product);

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: enrollOrder.enrolledList[i].fees * 100,
          currency: "aud",
        });

        console.log("price is " + price);

        line_items.push({
          price: price.id,
          quantity: 1,
        });

        console.log("line items is ", line_items);
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },

    /*  checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const enrollOrder = new EnrollOrder({ coaches: args.coaches });
      const line_items = [];

      const { coaches } = await enrollOrder.populate("coaches").execPopulate();

      for (let i = 0; i < coaches.length; i++) {
        const product = await stripe.products.create({
          name: coaches[i].coachname,
          description: coaches[i].description,
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: coaches[i].fees * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    }, */
  },

  Mutation: {
    addUser: async (parent, args) => {
      console.log(args);
      const user = await User.create(args.input);
      const token = signToken(user);

      return { token, user };
    },

    addEnrollOrder: async (parent, { coaches }, context) => {
      console.log(context);
      if (context.user) {
        const enrollOrder = new EnrollOrder({ coaches });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { enrollOrders: enrollOrder },
        });

        return enrollOrder;
      }

      throw new AuthenticationError("Not logged in");
    },

    addStudentEnrolled: async (parent, args, context) => {
      if (context.user) {
        const result = Coach.findOneAndUpdate(
          { coachname: args.input.coachname },
          {
            $addToSet: {
              enrolledStudents: {
                username: context.user.username,
                email: context.user.email,
                _id: context.user._id,
              },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );

        return result;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addProgramsEnrolled: async (parent, args, context) => {
      if (context.user) {
        const resultUser = User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: {
              programsEnrolled: {
                coachname: args.input.coachname,
                sessionStartDate: args.input.sessionStartDate,
                classTime: args.input.classTime,
                classDay: args.input.classDay,
                sportName: args.input.sportName,
                fees: args.input.fees,
              },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );

        return resultUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addCoach: async (parent, args, context) => {
      if (context.user) {
        const coach = await Coach.create({
          coachname: context.user.username,
          ...args.input,
          userProfile: context.user._id,
        });

        const filter = { _id: context.user._id };
        const update = { coachProfile: coach._id };

        const result = await User.findOneAndUpdate(filter, update, {
          returnOriginal: false,
        });

        return coach;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    addtimeSlot: async (parent, { slotValue, slotId }, context) => {
      if (context.user) {
        const result = await User.findOne({ _id: context.user._id }).populate(
          "coachProfile"
        );

        return Coach.findOneAndUpdate(
          { _id: result.coachProfile[0]._id },
          {
            $addToSet: {
              timeSlot: { slotValue, slotId },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addDay: async (parent, { dayValue, dayId }, context) => {
      console.log(context.user);
      if (context.user) {
        const result = await User.findOne({ _id: context.user._id }).populate(
          "coachProfile"
        );
        console.log("coach profile is ", result.coachProfile[0]._id);
        console.log("time slot in  profile is ", result.coachProfile[0].days);

        return Coach.findOneAndUpdate(
          { _id: result.coachProfile[0]._id },
          {
            $addToSet: {
              days: { dayValue, dayId },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addCoachReviews: async (parent, args, context) => {
      console.log(args);
      if (context.user) {
        const coachReviews = await CoachReviews.create({
          ...args.input,
          userProfile: context.user._id,
        });
        return coachReviews;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

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
