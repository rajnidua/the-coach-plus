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
    programsEnrolled: [ProgramsEnrolled]
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
    days: [Day]!
    timeSlot: [Time]!
    venuePostalCode: String
    userProfile: [User]
    enrolledStudents: [EnrolledStudents]
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
    enrolledStudents: [String]
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
    coachProfile: [coachInput]
    programsEnrolled: [String]
  }

  input coachnameInput {
    coachname: String
  }

  type EnrolledStudents {
    _id: ID
    username: String
    email: String
  }

  type ProgramsEnrolled {
    _id: ID
    coachname: String
  }

  type Time {
    _id: ID
    slotValue: String
    slotId: String
  }
  type Day {
    _id: ID
    dayValue: String
    dayId: String
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
    addtimeSlot(slotValue: String!, slotId: String!): Coach
    addDay(dayValue: String!, dayId: String!): Coach
    addStudentEnrolled(input: coachnameInput!): Coach
    addProgramsEnrolled(input: coachnameInput!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

//addCoach(input: coachInput!): Coach
//studentsEnrolledArray: [StudentsEnrolledType]!
//studentsEnrolled: [User];
