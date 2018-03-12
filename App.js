import React from "react";
import { Provider } from "react-redux";
import AppNavigation from "./src/navigation/navigationStack";
import store from "./store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
