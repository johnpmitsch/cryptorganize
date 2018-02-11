import React from "react";
import Home from "./src/components/Home";
import PublicKey from "./src/components/PublicKey";
import CryptoForm from "./src/components/crypto-form/CryptoForm";
import { Platform, StatusBar } from "react-native";
import { StackNavigator } from "react-navigation";

const App = StackNavigator(
  {
    Main: { screen: Home },
    PublicKey: { screen: PublicKey },
    CryptoForm: { screen: CryptoForm }
  },
  {
    cardStyle: {
      backgroundColor: "white",
      paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
    }
  }
);

export default App;
