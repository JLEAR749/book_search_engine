import {gql} from '@apollo/client';

export const GET_ME = gql`
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