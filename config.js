import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyASXg8bkRQv16bPms-UqMMvwxVE3ATldYo",
  authDomain: "wily-a74e1.firebaseapp.com",
  projectId: "wily-a74e1",
  storageBucket: "wily-a74e1.appspot.com",
  messagingSenderId: "847690535426",
  appId: "1:847690535426:web:eb261f0a28bbaf35058d1b"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
