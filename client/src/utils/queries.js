import {gql} from '@apollo/client';

export const getItem = gql`
{
    me{
        _id
        username
        email
        saved_books{
            bookId
            authors
            description
            title
            impage
            link
        }
    }
}
`;