import { id, app } from './realm';
import {
  GraphQLClient,
} from 'graphql-request';

const graphqlUri = `https://realm.mongodb.com/api/client/v2.0/app/${id}/graphql`;

const getAccessToken = async () => {
  if (!app.currentUser) {

  } else {
    await app.currentUser.refreshCustomData();
  }

  return app.currentUser.accessToken;
}

const client = new GraphQLClient(
  graphqlUri,
  {
    fetch: async (uri, options) => {
      const accessToken = await getAccessToken();
      options.headers.Authorization = `Bearer ${accessToken}`;
      return fetch(uri, options);
    },
  }
);

export {
  client,
  graphqlUri,
};
