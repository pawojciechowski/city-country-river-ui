import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/link-ws';

const WSClient = new WebSocketLink({
  uri: process.env.API_URL || 'ws://localhost:8000/api',
  options: {
    reconnect: true
  }
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: WSClient
});
