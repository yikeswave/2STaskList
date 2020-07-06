import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBrcjyS774cKX3kzmqkZ98ptDyr72WNmfE",
  authDomain: "stasklist-bb623.firebaseapp.com",
  databaseURL: "https://stasklist-bb623.firebaseio.com",
  projectId: "stasklist-bb623",
  storageBucket: "stasklist-bb623.appspot.com",
  messagingSenderId: "501606567637",
  appId: "1:501606567637:web:8e1428fe4dd398204e1c5c",
  measurementId: "G-TH8VCCTTHQ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Init VK  Mini App
bridge.send("VKWebAppInit");

const db = firebase.firestore();
db.collection("desks").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(doc.data());
  });
});

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
