import React from "react";
import { Clipboard, View } from "react-native";
import { Button, Text, ListItem } from "react-native-elements";
import styles from "../styles/styles";
import QRCode from "react-native-qrcode-svg";
import globalVars from "../helpers/globalVars";

class PublicKey extends React.Component {
  constructor(props) {
    super(props);
  }

  copyToClipboard(text) {
    Clipboard.setString(text);
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    headerStyle: styles.mainHeader,
    headerTintColor: globalVars.headerTintColor
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.publicKeyContainer}>
        <Button
          raised
          containerViewStyle={styles.publicKeyButton}
          backgroundColor={globalVars.buttonColor}
          borderRadius={5}
          fontSize={14}
          icon={{name: 'clipboard', type: 'font-awesome'}}
          onPress={this.copyToClipboard(params.key)}
          title={params.key} />
        <QRCode size={250} value={params.key} />
      </View>
    );
  }
}

export default PublicKey;
