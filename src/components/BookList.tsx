import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries';
import { Book } from '../dto/interfaces';

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

interface Prop {
    onBookClicked: (id: string) => void;
}

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

const BookList = ({ onBookClicked }: Prop) => {
    const { loading, error, data } = useQuery(getBooksQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    function handleBookClicked(id: string) {
        console.log(`Clicked Book ID: ${id}`);
        onBookClicked(id);
    }

    return data.books.map(({ id, name }: Book) => (
        <li key={id} onClick={() => handleBookClicked(id)}>
            {name}
        </li>
    ));
};

export default BookList;
