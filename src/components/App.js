import React from "react";
import { Provider } from "react-redux";

import { store } from "../store";

const App = () => (
  <Provider store={store}>
    <div>
      A pure boiler plate for React, with configured Webpack, Babel, SASS and
      CSS
    </div>
  </Provider>
);

export { App };
