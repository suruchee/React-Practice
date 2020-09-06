import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDhdA2jpztprdOYKktNa0Ddm2fW2P_g-84",
  authDomain: "facebook-clone-8226c.firebaseapp.com",
  databaseURL: "https://facebook-clone-8226c.firebaseio.com",
  projectId: "facebook-clone-8226c",
  storageBucket: "facebook-clone-8226c.appspot.com",
  messagingSenderId: "233684396998",
  appId: "1:233684396998:web:21aac98dd6c994c35660c7",
  measurementId: "G-03WNELJB4C",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
