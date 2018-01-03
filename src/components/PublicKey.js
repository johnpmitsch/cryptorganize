import React from "react";
import { View } from "react-native";
import { Text, ListItem } from "react-native-elements";
import styles from "../styles/styles";
import QRCode from "react-native-qrcode-svg";

class PublicKey extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.publicKeyContainer}>
        <Text>{params.key}</Text>
        <QRCode size={250} value={params.key} />
      </View>
    );
  }
}

export default PublicKey;
