import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var config = {
  apiKey: "AIzaSyB37mvdi-7-Cx4QP2s4cm357R5f7hVo1_s",
  authDomain: "hello-world-e9c1c.firebaseapp.com",
  databaseURL: "https://hello-world-e9c1c.firebaseio.com",
  projectId: "hello-world-e9c1c",
  storageBucket: "hello-world-e9c1c.appspot.com",
  messagingSenderId: "151241590825",
  appId: "1:151241590825:web:b8cda3667249c8bca17438",
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const Db = firebase.database();
const Auth = firebase.auth();

export { Db, Auth };
