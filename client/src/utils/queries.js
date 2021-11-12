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
      houseNumber
      streetName
      postalCode
      country

      coachProfile {
        _id
        coachname
        description
        groupSize
        duration
        fees
      }
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
      venuePostalCode
      userProfile {
        _id
      }
    }
  }
`;
