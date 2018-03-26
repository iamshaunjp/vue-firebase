import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAU6bDBSNDwP8_9_FOgl9BjqSGFBUVakAw",
  authDomain: "cooking-ninjas.firebaseapp.com",
  databaseURL: "https://cooking-ninjas.firebaseio.com",
  projectId: "cooking-ninjas",
  storageBucket: "cooking-ninjas.appspot.com",
  messagingSenderId: "867122103898"
};
const firebasebApp = firebase.initializeApp(config);

// export firestore database
export default firebasebApp.firestore()