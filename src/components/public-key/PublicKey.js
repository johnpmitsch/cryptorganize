import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import styles from "../../styles/styles";

class PublicKey extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.publicKeyContainer}>
        <Text h1>Nano</Text>
      </View>
    );
  }
}

export default PublicKey;
