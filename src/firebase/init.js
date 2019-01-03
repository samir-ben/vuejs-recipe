import firebase from 'firebase/app'
import 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDqRTORT57jk4ULcT4oE1iCHblOyvdrsP0",
    authDomain: "recipes-vue.firebaseapp.com",
    databaseURL: "https://recipes-vue.firebaseio.com",
    projectId: "recipes-vue",
    storageBucket: "recipes-vue.appspot.com",
    messagingSenderId: "192281069452"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();