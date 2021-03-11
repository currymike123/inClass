/* Holds tthe user session. Is a singleton. */

const Session = {
  user: null,
  message: [],
};

export default Session;

export function Login() {
  Session.user = { name: "Moshe" };
}

export function Logout() {
  Session.user = null;
}
