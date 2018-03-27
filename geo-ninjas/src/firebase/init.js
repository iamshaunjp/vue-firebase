import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
  apiKey: "AIzaSyAzJSgvjk7m0VSQ-c6PlzlZ37B27mg0u7o",
  authDomain: "vue-geo-ninjas.firebaseapp.com",
  databaseURL: "https://vue-geo-ninjas.firebaseio.com",
  projectId: "vue-geo-ninjas",
  storageBucket: "vue-geo-ninjas.appspot.com",
  messagingSenderId: "68205488779"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()