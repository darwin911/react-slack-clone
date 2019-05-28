import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAb__WCPC5T6JI_C9xQQdf2Om4gfYwPdyo",
  authDomain: "react-slack-clone-8bea6.firebaseapp.com",
  databaseURL: "https://react-slack-clone-8bea6.firebaseio.com",
  projectId: "react-slack-clone-8bea6",
  storageBucket: "react-slack-clone-8bea6.appspot.com/",
  messagingSenderId: "853910582257",
  appId: "1:853910582257:web:d8d9d94cc5c45140"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;