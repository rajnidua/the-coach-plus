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
    enrollOrders: [EnrollOrder]
  }

  type Coach {
    _id: ID
    coachname: String
    description: String
    image: String
    sport: String
    groupSize: String
    duration: String
    fees: Float
    sessionStart: String
    days: [Day]!
    timeSlot: [Time]!
    venuePostalCode: String
    userProfile: [User]
    enrolledStudents: [EnrolledStudents]
  }

  type EnrollOrder {
    _id: ID
    enrollDate: String
    coaches: [Coach]
  }

  type Checkout {
    session: ID
  }

  input coachInput {
    _id: ID
    coachname: String
    description: String
    image: String
    sport: String
    groupSize: String
    duration: String
    fees: Float
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

  input programEnrolledInput {
    coachname: String
    sessionStartDate: String
    classTime: String
    classDay: String
    sportName: String
    fees: Float
  }

  type EnrolledStudents {
    _id: ID
    username: String
    email: String
  }

  type ProgramsEnrolled {
    _id: ID
    coachname: String
    sessionStartDate: String
    classTime: String
    classDay: String
    sportName: String
    fees: Float
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
    enrollOrder(_id: ID!): EnrollOrder
    checkout: Checkout
  }

  type Mutation {
    addUser(input: userInput!): Auth
    addCoach(input: coachInput!): Coach
    addtimeSlot(slotValue: String!, slotId: String!): Coach
    addDay(dayValue: String!, dayId: String!): Coach
    addStudentEnrolled(input: coachnameInput!): Coach
    addProgramsEnrolled(input: programEnrolledInput!): User
    login(email: String!, password: String!): Auth
    addEnrollOrder(coaches: [ID]!): EnrollOrder
  }
`;

module.exports = typeDefs;

//addCoach(input: coachInput!): Coach
//studentsEnrolledArray: [StudentsEnrolledType]!
//studentsEnrolled: [User];

//addEnrollOrder(coaches: [ID]!): EnrollOrder

//checkout(coaches: [ID]!): Checkout
