import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
// import bridge from "@vkontakte/vk-bridge";
import * as backend from "./actions/index";
import * as router from "./router/index";

import App from "./components/App/AppContainer";

import { reducer } from "./reducers/reducer";

const route = router.initialize();
backend.initialize();

const store = createStore(reducer);

// Init VK  Mini App
// bridge.send("VKWebAppInit");

ReactDOM.render(
  <App router={route} store={store} />,
  document.getElementById("root")
);
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
