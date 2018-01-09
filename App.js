import React from "react";
import Home from "./src/components/Home";
import PublicKey from "./src/components/PublicKey";
import CryptoForm from "./src/components/CryptoForm";
import { StackNavigator } from "react-navigation";

const App = StackNavigator(
  {
    Main: { screen: Home },
    PublicKey: { screen: PublicKey },
    CryptoForm: { screen: CryptoForm }
  },
  {
    cardStyle: {
      backgroundColor: "white"
    }
  }
);

export default App;
