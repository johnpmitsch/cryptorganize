import Home from "../components/Home";
import CryptoForm from "../components/crypto-form/CryptoForm";
import { StackNavigator } from "react-navigation";
import { Platform, StatusBar } from "react-native";

const navigator = StackNavigator(
  {
    Main: { screen: Home },
    CryptoForm: { screen: CryptoForm }
  },
  {
    cardStyle: {
      backgroundColor: "white",
      paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
    }
  }
);

export default navigator;
