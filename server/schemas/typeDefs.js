const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    isCoach: Boolean
    coachProfile: Coach
  }

  type Coach {
    _id: ID
    coachname: String
    description: String
    image: String
    fees: Float
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

    coachDetail(username: String): Coach
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      isCoach: Boolean!
    ): Auth
    addCoach(description: String, image: String, fees: String): Coach

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
