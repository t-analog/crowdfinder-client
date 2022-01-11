import Realm from 'realm';
import { app } from './realm';

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

const logout = async () => {
  const user = app.currentUser;
  await user.logOut();
  return user.isLoggedIn;
}

export { login, logout };
