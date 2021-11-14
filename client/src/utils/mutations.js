import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($input: userInput!) {
    addUser(input: $input) {
      token
      user {
        username
        _id
        email
        isCoach
        streetName
        houseNumber
        postalCode
        state
        country
        city
      }
    }
  }
`;

export const PROGRAMS_ENROLLED = gql`
  mutation addProgramsEnrolled($input: programEnrolledInput!) {
    addProgramsEnrolled(input: $input) {
      programsEnrolled {
        _id
        coachname
        sessionStartDate
        classTime
        classDay
        sportName
      }
    }
  }
`;

export const ADD_COACH = gql`
  mutation addCoach($input: coachInput!) {
    addCoach(input: $input) {
      coachname
      description
      image
      fees
      sport
      duration
      groupSize

      sessionStart
      days
      timeSlot
      userProfile {
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

/*  mutation addUser(
    $username: String!
    $password: String!
    $email: String!
    $isCoach: Boolean!
    $houseNumber: Int
    $streetName: String
    $postalCode: Int
    $state: String
    $country: String
  ) {
    addUser(
      username: $username
      password: $password
      email: $email
      isCoach: $isCoach
    ) {
      token
      user {
        username
        _id
        email
        isCoach
      }
    }
  } */
