import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $password: String!
    $email: String!
    $isCoach: Boolean!
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
  }
`;
