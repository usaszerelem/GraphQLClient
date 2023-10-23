import {} from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import BookList from './components/BookList';

// Apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <div id="main">
            <ApolloProvider client={client}>
                <h1>Reading List</h1>
                <BookList />
            </ApolloProvider>
        </div>
    );
}

export default App;
