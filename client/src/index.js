import "semantic-ui-css/semantic.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./modules/common/layout/App";
import * as serviceWorker from "./serviceWorker";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
const client = new ApolloClient({
  uri: '/graphql',
});
export const browserHistory = createBrowserHistory();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
