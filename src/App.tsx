import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client as apolloClient } from 'config/apollo';

const App = () => (
  <ApolloProvider client={apolloClient}>
    <div>
      <h1>City, country, river</h1>
    </div>
  </ApolloProvider>
);

export default App;
