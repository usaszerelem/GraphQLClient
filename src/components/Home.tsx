import { useNavigate } from 'react-router-dom';
import BookList from './BookList';
import AddBook from './AddBook';

const Home = () => {
    const navigate = useNavigate();

    function handleOnBookClicked(id: string) {
        console.log(`Received book ID: ${id}`);
        navigate('/bookDetail', { state: { bookId: id } });
    }

    return (
        <div>
            <h1>Reading List</h1>
            <BookList onBookClicked={handleOnBookClicked} />
            <AddBook />
        </div>
    );
};

export default Home;
