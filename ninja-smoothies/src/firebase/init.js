import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD7S87xiP6Ni3tmIupnCByziklwk1HxzWw",
  authDomain: "ninja-smoothies.firebaseapp.com",
  databaseURL: "https://ninja-smoothies.firebaseio.com",
  projectId: "ninja-smoothies",
  storageBucket: "",
  messagingSenderId: "979366054783"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()
