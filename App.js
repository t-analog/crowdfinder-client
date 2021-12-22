import LoginScreen from './screens/Login';
import Realm from 'realm';

const id = "crowdfinder-byjrt";
const app = new Realm.App({ id });
const credentials = Realm.Credentials.emailPassword(
  "first@first.com",
  "password"
);

const login = (async () => {
  try {
    const user = await app.logIn(credentials);
    console.log("Successfully logged in!", user.id);
    return user;
  } catch (err) {
    console.error("Failed to log in", err.message);
  }
})();

export default LoginScreen;
