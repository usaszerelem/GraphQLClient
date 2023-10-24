import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries';

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

interface Book {
    id: string;
    name: string;
}

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

const BookList = () => {
    const { loading, error, data } = useQuery(getBooksQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.books.map(({ id, name }: Book) => <li key={id}>{name}</li>);
};

export default BookList;
