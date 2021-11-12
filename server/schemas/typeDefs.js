const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    isCoach: Boolean
    houseNumber: String
    streetName: String
    postalCode: String
    state: String
    country: String
    city: String
    coachProfile: [Coach]
  }

  type Coach {
    _id: ID
    coachname: String
    description: String
    image: String
    sport: String
    groupSize: String
    duration: String
    fees: String
    sessionStart: String
    days: [String]
    timeSlot: [String]
    venuePostalCode: String
    userProfile: [User]
  }

  input coachInput {
    _id: ID
    coachname: String
    description: String
    image: String
    sport: String
    groupSize: String
    duration: String
    fees: String
    sessionStart: String
    days: [String]
    timeSlot: [String]
    venuePostalCode: String
  }

  input userInput {
    _id: ID
    username: String
    email: String
    password: String
    isCoach: Boolean
    houseNumber: String
    streetName: String
    postalCode: String
    state: String
    country: String
    city: String
    coachProfile: coachInput
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    coaches: [Coach]
    user(username: String!): User
    me: User
    coach(coachId: ID!): Coach

    coachDetail(coachname: String): Coach
  }

  type Mutation {
    addUser(input: userInput!): Auth
    addCoach(input: coachInput!): Coach
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

//addCoach(input: coachInput!): Coach
