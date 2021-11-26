const { AuthenticationError } = require("apollo-server-express");
const { Mongoose } = require("mongoose");
const { User, Coach, EnrollOrder } = require("../models");
const coachSchema = require("../models/Coach");
const { signToken } = require("../utils/auth");
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
    checkout: async (parent, args, context) => {
      console.log("value of stripe is ", stripe);
      const url = new URL(context.headers.referer).origin;
      const enrollOrder = new EnrollOrder({ coaches: args.coaches });
      const line_items = [];
      console.log("enrollOrder is ", enrollOrder);

      const { coaches } = await enrollOrder.populate("coaches").execPopulate();
      console.log("coaches value ", coaches);
      console.log("coachname at 0 location" + coaches[0].coachname);
      console.log("coachname at 0 location" + coaches[0].description);

      for (let i = 0; i < coaches.length; i++) {
        const coach = await stripe.coaches.create({
          coachname: coaches[i].coachname,
          description: coaches[i].description,
        });
        console.log("******* value of coach is ", coach);

        /*const price = await stripe.prices.create({
          coach: coach.id,
          unit_amount: coaches[i].fees * 100,
          currency: "usd",
        });
        console.log("price is", price);

        line_items.push({
          price: price.id,
        }); */
      }

      /* console.log("line_items", line_items);

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      console.log("session", session);
      return { session: session.id }; */
      return coaches;
    },
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
      console.log("Value of args in add Programs Enrolled is ", args);
      console.log(args.input.coachname);
      console.log(args.input.sessionStartDate);
      console.log(args.input.classTime);
      console.log(args.input.classDay);
      console.log(args.input.sportName);
      console.log("value of user object is ================", context.user);

      if (context.user) {
        console.log("user coach is: ");
        console.log(context.user._id);

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
              },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );

        //console.log("****************", context.user.programsEnrolled);

        console.log("result is:");
        console.log(resultUser);
        console.log("result end");

        return resultUser;
      }
      throw new AuthenticationError("You need to be logged in!");
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

    addtimeSlot: async (parent, { slotValue, slotId }, context) => {
      console.log(context.user);
      if (context.user) {
        const result = await User.findOne({ _id: context.user._id }).populate(
          "coachProfile"
        );
        console.log("coach profile is ", result.coachProfile[0]._id);
        console.log(
          "time slot in  profile is ",
          result.coachProfile[0].timeSlot
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
