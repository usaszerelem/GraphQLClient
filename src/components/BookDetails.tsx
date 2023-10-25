import { useLocation, useNavigate } from 'react-router-dom';
import { getBookQuery } from '../queries/queries';
import { useQuery } from '@apollo/client';
import { Book } from '../dto/interfaces';

const BookDetails = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    console.log(`BookDetails, bookId: ${state.bookId}`);

    const { loading, error, data } = useQuery(getBookQuery, {
        variables: {
            id: state.bookId,
        },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    function handleOnClick() {
        navigate('/');
    }

    return (
        <div id="book-details">
            <h3>Book Details</h3>
            <div className="field">
                <label>Book:</label>
                <input type="text" id="book-name" value={data.book.name} readOnly />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" id="book-genre" value={data.book.genre} readOnly />
            </div>
            <div className="field">
                <label>Author:</label>
                <input type="text" id="book-author" value={data.book.author.name} readOnly />
            </div>
            <p>Other books by this same author</p>

            {data.book.author.books.map(({ id, name, genre }: Book) => (
                <li key={id}>
                    {name} - Genre: {genre}
                </li>
            ))}
            <p />
            <button onClick={handleOnClick}>Return</button>
        </div>
    );
};

export default BookDetails;
