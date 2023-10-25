import { useMutation, useQuery } from '@apollo/client';
import { addBookMutation, getAuthorsQuery, getBooksQuery } from '../queries/queries';
import { useState } from 'react';
import { Author } from '../dto/interfaces';

// ---------------------------------------------------------------------------
// https://www.apollographql.com/docs/react/data/mutations
// ---------------------------------------------------------------------------

const AddBook = () => {
    const [bookName, setBookName] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [genre, setGenre] = useState<string>('');
    const { loading, error: dataError, data } = useQuery(getAuthorsQuery);
    const [addBook, { data: _mutationData, loading: mutationLoading, error: mutationError }] = useMutation(addBookMutation);

    if (dataError) return <p>Error : {dataError.message}</p>;
    if (mutationError) return <p>Submission Error : {mutationError.message}</p>;
    if (mutationLoading) return <p>Submitting...</p>;

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log(`Book name: ${bookName}`);
        console.log(`Genre: ${genre}`);
        console.log(`Author: ${author}`);

        addBook({
            variables: {
                name: bookName,
                genre: genre,
                authorId: author,
            },
            refetchQueries: [{ query: getBooksQuery }],
        });
    };

    return (
        <form id="add-book" onSubmit={handleSubmit}>
            <p />

            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={(e) => setBookName(e.target.value)} />
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={(e) => setGenre(e.target.value)} />
            </div>

            <div className="field">
                <label>Author:</label>
                <select onChange={(e) => setAuthor(e.target.value)}>
                    <option>Select author</option>
                    {loading && <option disabled>Loading authors</option>}
                    {!loading &&
                        data.authors.map(({ id, name }: Author) => (
                            <option key={id} value={id}>
                                {name}
                            </option>
                        ))}
                </select>
            </div>
            <p />
            <button type="submit">+</button>
        </form>
    );
};

export default AddBook;
