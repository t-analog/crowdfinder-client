import Realm from 'realm';

const id = "crowdfinder-byjrt";
const app = new Realm.App({ id });

/**
 * Log in user into Realm app
 * @param username The end-user username/email address.
 * @param password The end-user password.
 * @returns
 * If success, returns user's `accessToken`.
 * If `magicword` is given as `username`, return `0`.
 * Else, return `1`.
 * */
const login = async ({ username, password }) => {
  if (username == "magicword") return 0;
  const credentials = Realm.Credentials.emailPassword(
    username,
    password
  );
  try {
    const user = await app.logIn(credentials);
    return user.accessToken;
  } catch (err) {
    return 1;
  }
};

export { app, login };
