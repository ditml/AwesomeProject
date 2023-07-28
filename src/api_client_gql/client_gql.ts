import {ApolloClient, InMemoryCache} from '@apollo/client';
const BASE_URL = 'http://192.168.43.130:3000/graphql';

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});

export default client;
