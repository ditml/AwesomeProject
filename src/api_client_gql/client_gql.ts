import {ApolloClient, InMemoryCache} from '@apollo/client';
const BASE_URL = 'http://192.168.0.105:3000/graphql';

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});

export default client;
