import React from "react";
import CryptoList from "./src/components/CryptoList";
import { View } from "react-native";
import { Header, Text } from "react-native-elements";
import styles from "./src/styles/styles";

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
        <View style={styles.titleContainer}>
          <Text h3 style={styles.centerText}>
            Public Keys
          </Text>
        </View>
        <CryptoList />
      </View>
    );
  }
}
