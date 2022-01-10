import { id, app } from './realm';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const graphqlUri = `https://realm.mongodb.com/api/client/v2.0/app/${id}/graphql`;

const getAccessToken = async () => {
  if (!app.currentUser) {
    // await app.logIn(Realm.Credentials.emailPassword(
    //   "first@first.com",
    //   "password"
    // ));
  } else {
    await app.currentUser.refreshCustomData();
  }

  return app.currentUser.accessToken;
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: graphqlUri,
    fetch: async (uri, options) => {
      const accessToken = await getAccessToken();
      options.headers.Authorization = `Bearer ${accessToken}`;
      return fetch(uri, options);
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
