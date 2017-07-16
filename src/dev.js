import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./App";

const root = document.getElementById("wikitags-app");

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        root
    );
};

render(App);

// Hot module replacement api
if (module.hot) {
    module.hot.accept("./app", () => {
        render(App);
    });
}
