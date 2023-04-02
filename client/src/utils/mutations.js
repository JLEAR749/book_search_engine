import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation loginUser($email:String!, $password: String!){
    login(email:$email, password: $password) {
        token user {
            _id 
            username
        }
    }
}`;

export const  ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
        token user {
            _id
            username
            email
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
}`;

export const SAVE_BOOK = gql`
mutation savedBooks($input: savedBook!) {
    savedBook(input: $input) {
        _id
        username
        email
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

export const deleteBook = gql`
mutation deleteBook($bookId: ID!) {
    deleteBook(bookId: $bookId) {
        _id
        username
        email
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