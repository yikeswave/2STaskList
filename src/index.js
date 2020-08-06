import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
// import bridge from "@vkontakte/vk-bridge";
import App from "./components/App/App";

import * as firebase from "firebase/app";
import "firebase/analytics";
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
// bridge.send("VKWebAppInit");

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
