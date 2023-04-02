import gql from 'graphql-tag';

export const getMe = gql`
{
    me{
        _id
        username
        email
        bookCount
        saved_books{
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