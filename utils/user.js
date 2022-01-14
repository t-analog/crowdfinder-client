import Realm from 'realm';
import { app } from './realm';

/**
 * Register user into Realm app and log in the user
 * @param username The end-user username/email address.
 * @param password The end-user password.
 * @returns
 * If success, returns user's `accessToken`.
 * Else, print error to `stderr`, then return `false`.
 * */
const register = async ({ username, password }) => {
  try {
    await app.emailPasswordAuth.registerUser({
      email: username,
      password
    });
  } catch (err) {
    console.error(`Failed to register: ${err.message}`);
    return false;
  }
  const credentials = Realm.Credentials.emailPassword(
    username,
    password
  );
  try {
    const user = await app.logIn(credentials);
    return user;
  } catch (err) {
    return false;
  }
};

/**
 * Log in user into Realm app
 * @param username The end-user username/email address.
 * @param password The end-user password.
 * @returns
 * If success, returns user's `accessToken`.
 * If `magicword` is given as `username`, return `magicword`.
 * Else, print error to `stderr`, then return `false`.
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
    console.error(`Failed to login: ${err.message}`);
    return false;
  }
};

/**
 * Log out user from Realm app
 * @returns
 * If success, returns `true`.
 * Else, print error to `stderr`, then return `false`.
 * */
const logout = async () => {
  const user = app.currentUser;
  try {
    await user.logOut();
    return !user.isLoggedIn;
  } catch (err) {
    console.error(`Failed to logout: ${err.message}`);
    return false;
  }
}

export { register, login, logout };
