import Realm from 'realm';
// import { REALM_APP_ID } from '@env';

// const id = `${REALM_APP_ID}`;
const id = "crowdfinder-ooixw";
const app = new Realm.App({ id });

export { id, app };
