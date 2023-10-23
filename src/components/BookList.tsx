import { useQuery, gql } from '@apollo/client';

interface Book {
    id: string;
    name: string;
}

const getBooksQuery = gql`
    query GetBooks {
        books {
            name
            id
        }
    }
`;

const BookList = () => {
    const { loading, error, data } = useQuery(getBooksQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.books.map(({ id, name }: Book) => (
        <div key={id}>
            <h3>{name}</h3>
        </div>
    ));
};

export default BookList;
