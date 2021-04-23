import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC1yUMtlittR4tvSnAx8BaehrXgvxuWQ3c",
    authDomain: "buzzle-c9688.firebaseapp.com",
    projectId: "buzzle-c9688",
    storageBucket: "buzzle-c9688.appspot.com",
    messagingSenderId: "571738079277",
    appId: "1:571738079277:web:8603fb8803cb8cbbcaf8a4",
    measurementId: "G-Q9XL2ME083"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;