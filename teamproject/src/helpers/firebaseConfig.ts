import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBzkfajMvZOY8Z_OOO0oau8ZRSfH4HoiyY",
  authDomain: "sda-project-currencies.firebaseapp.com",
  projectId: "sda-project-currencies",
  storageBucket: "sda-project-currencies.appspot.com",
  messagingSenderId: "294310663493",
  appId: "1:294310663493:web:669b522696e86eb6b05a2c",
  measurementId: "G-7X4WS2F6VW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);