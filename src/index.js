import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import bridge from "@vkontakte/vk-bridge";
import * as backend from "./api/index";
import * as router from "./router/index";

import App from "./components/App/AppContainer";

import { reducer } from "./reducers/reducer";

const route = router.initialize();
backend.initialize();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// Init VK  Mini App
// bridge.send("VKWebAppInit");

ReactDOM.render(
  <App router={route} store={store} />,
  document.getElementById("root")
);
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
