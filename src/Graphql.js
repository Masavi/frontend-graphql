import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

const API_URL = "https://negro-remoto-backend.herokuapp.com";

const cache = new InMemoryCache();

const httpLink = createUploadLink({
  uri: `${API_URL}/graphql`,
});

export default new ApolloClient({
  cache,
  link: httpLink,
})