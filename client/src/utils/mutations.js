import {gql} from '@apollo/client';

export const loginUser = gql`
mutation loginUser($email:String!, $password: String!){
    login(email:$email, password: $password) {
        token user {
            _id 
            username
        }
    }
}`;

export const  AddUser = gql`
mmutation AddUser($email:String!, $password: String!){
    login(email:$email, password: $password) {
        token user {
            _id
            username
        }
    }
}`;

export const saved_books = gql`
mutation saved_books($input: BookInput) {
    saved_books(input: $input) {
        _id
        username
        bookCount
        saved_books {
            bookId
            authors
            image
            link
            title
            description
        }
    }
}
`;

export const removeItem = gql`
mutation removeItem($bookId: String!) {
    removeItem(bookId: $bookId) {
        _id
        username
        bookCount
        saved_books {
            bookId
            authors
            image
            link
            title
            description
        }
    }
}
`;