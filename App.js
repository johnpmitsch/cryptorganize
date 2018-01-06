import React from "react";
import Home from "./src/components/Home";
import PublicKey from "./src/components/PublicKey";
import { StackNavigator } from "react-navigation";

const App = StackNavigator(
  {
    Main: { screen: Home },
    PublicKey: { screen: PublicKey }
  },
  {
    cardStyle: {
      backgroundColor: "white"
    }
  }
);

export default App;
