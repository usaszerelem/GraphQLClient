import { RouterProvider } from 'react-router-dom';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import router from './routes';

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

function App() {
    loadDevMessages();
    loadErrorMessages();

    return (
        <div id="main">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
