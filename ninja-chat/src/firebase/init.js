import firebase from 'firebase'
import firestore from 'firebase/firestore'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC0uA3D27XBKuAYS2CntT5rwNbrshHZMuw",
    authDomain: "ninja-chat-vue.firebaseapp.com",
    databaseURL: "https://ninja-chat-vue.firebaseio.com",
    projectId: "ninja-chat-vue",
    storageBucket: "",
    messagingSenderId: "121738298624"
  };
  
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()
