import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDqtWPYOQdJlHJ8mOAgHFdh7MZ_5tRC5jU",
    authDomain: "book-santa-bfc33.firebaseapp.com",
    projectId: "book-santa-bfc33",
    storageBucket: "book-santa-bfc33.appspot.com",
    messagingSenderId: "778283662690",
    appId: "1:778283662690:web:725d71f1f800399a92c03b",
    measurementId: "G-N0JNR77JKL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase.firestore();