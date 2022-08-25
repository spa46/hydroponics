import { BehaviorSubject } from "rxjs";

import { HandleResponse } from "../_helpers";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

export const AuthenticationService = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
};

function login(email, password) {
  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };
  console.log(requestOptions.body);
  return fetch('/accounts/login/', requestOptions)
    .then(HandleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      console.log(requestOptions.body)
      localStorage.setItem("currentUser", JSON.stringify(user));
      currentUserSubject.next(user);

      return user;
    })
    .catch((error) => {
      console.log(error);
     });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
}
