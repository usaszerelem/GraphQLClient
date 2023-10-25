import { gql } from '@apollo/client';

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

export const getBooksQuery = gql`
    query GetBooks {
        books {
            name
            id
        }
    }
`;

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

export const getBookQuery = gql`
    query GetBook($id: ID!) {
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    id
                    name
                    genre
                }
            }
        }
    }
`;

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

export const getAuthorsQuery = gql`
    query GetAuthors {
        authors {
            id
            name
        }
    }
`;

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

export const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: String!) {
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            name
            genre
        }
    }
`;
