import { createBrowserRouter } from 'react-router-dom';
//import BookDetails from './components/BookDetails';
import Home from './components/Home';
import BookDetails from './components/BookDetails';

const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/bookDetail', element: <BookDetails /> },
]);

export default router;
