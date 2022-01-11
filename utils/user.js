import Realm from 'realm';
import { app } from './realm';

/**
 * Register user into Realm app and log in the user
 * @param username The end-user username/email address.
 * @param password The end-user password.
 * @returns
 * If success, returns user's `accessToken`.
 * Else, return `1`.
 * */
const register = async ({ username, password }) => {
  await app.emailPasswordAuth.registerUser({
    email: username,
    password
  });
  const credentials = Realm.Credentials.emailPassword(
    username,
    password
  );
  try {
    const user = await app.logIn(credentials);
    return user;
  } catch (err) {
    return 1;
  }
};

/**
 * Log in user into Realm app
 * @param username The end-user username/email address.
 * @param password The end-user password.
 * @returns
 * If success, returns user's `accessToken`.
 * If `magicword` is given as `username`, return `magicword`.
 * Else, return `1`.
 * */
const login = async ({ username, password }) => {
  if (username == "magicword") return username;
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

/**
 * Log out user from Realm app
 * @returns
 * If success, returns `true`.
 * Else, return `false`.
 * */
const logout = async () => {
  const user = app.currentUser;
  await user.logOut();
  return !user.isLoggedIn;
}

export { register, login, logout };
