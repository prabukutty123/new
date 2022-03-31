import App from "./components/App";
import { AppContainer } from "react-hot-loader";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import * as React from "react";
import * as ReactDOM from "react-dom";
import store from "./Store";
import { Provider } from "react-redux";
import { MemoryRouter } from 'react-router';
initializeIcons();
let isOfficeInitialized = false;
const title = "Contoso Task Pane Add-in";
const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>


      <AppContainer>
        <Component title={title} isOfficeInitialized={isOfficeInitialized} />
      </AppContainer>
  

    </Provider>,
    document.getElementById("container")
  );
};

/* Render application after Office initializes */
Office.onReady(() => {
  isOfficeInitialized = true;
  render(App);
});

/* Initial render showing a progress bar */
<App />;

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default;
    render(NextApp);
  });
}