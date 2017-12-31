import React from "react";
import CryptoList from "./src/components/CryptoList";
import { Text, View } from "react-native";
import { Header } from "react-native-elements";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={{}}
          centerComponent={{ text: "Cryptorganize", style: { color: "#fff" } }}
          rightComponent={{}}
          backgroundColor="#312c32"
        />
        <CryptoList />
      </View>
    );
  }
}
