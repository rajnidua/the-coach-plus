import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      isCoach
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      isCoach
    }
  }
`;

export const QUERY_COACHES = gql`
  query coaches {
    coaches {
      _id
      coachname
      description
      image
      sport
      groupSize
      duration
      fees
      sessionStart
      days
      timeSlot

      userProfile {
        _id
      }
    }
  }
`;
