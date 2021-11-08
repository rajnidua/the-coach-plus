const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    isCoach: Boolean
    houseNumber: Int
    streetName: String
    postalCode: Int
    state: String
    country: String
    address: String
    coachProfile: [Coach]
  }

  type Coach {
    _id: ID
    coachname: String
    description: String
    image: String
    fees: Float
    userProfile: [User]
  }

  input coachInput {
    _id: ID
    coachname: String
    description: String
    image: String
    fees: Float
    userProfile: userInput
  }

  input userInput {
    _id: ID
    username: String
    email: String
    password: String
    isCoach: Boolean
    houseNumber: Int
    streetName: String
    postalCode: Int
    state: String
    country: String
    address: String
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
    addCoach(description: String, image: String, fees: String): Coach

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
