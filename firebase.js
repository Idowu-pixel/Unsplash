import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8WwiYZfb0gIyeumiYoH4KI0YB-JuJ73c",
  authDomain: "authentication-with-reac-adcf9.firebaseapp.com",
  databaseURL: "https://authentication-with-reac-adcf9.firebaseio.com",
  projectId: "authentication-with-reac-adcf9",
  storageBucket: "authentication-with-reac-adcf9.appspot.com",
  messagingSenderId: "615940134193",
  appId: "1:615940134193:web:29962c259fb6015b2e0c10",
  measurementId: "G-DJY7NN2VG3",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };

//Add to dependency: "firebase_core": "^0.5.0+1"
