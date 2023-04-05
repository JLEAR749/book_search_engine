import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        bookCount
        email
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation savedBooks($bookData: BookInput!) {
  saveBook(bookData: $bookData) {
    _id
    bookCount
  }
}
`;

export const DELETE_BOOK = gql`
  mutation RemovedBook($bookId: ID!) {
  removedBook(bookId: $bookId) {
    _id
  }
}
`;