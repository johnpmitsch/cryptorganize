import React from "react";
import { Image, Clipboard, View } from "react-native";
import { Button, Text, ListItem } from "react-native-elements";
import styles from "../styles/styles";
import QRCode from "react-native-qrcode-svg";
import globalHelpers from "../lib/globalHelpers";
import BlockChainExplorer from "./BlockChainExplorer";
import cryptoIcons from "../lib/cryptoIcons";

const MessageBarManager = require("react-native-message-bar").MessageBarManager;
const MessageBarAlert = require("react-native-message-bar").MessageBar;

class PublicKey extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    MessageBarManager.registerMessageBar(this.refs.alert);
  }

  componentWillUnmount() {
    MessageBarManager.unregisterMessageBar();
  }

  copyToClipboard(text) {
    Clipboard.setString(text);
    MessageBarManager.showAlert({
      message: `Key copied to clipboard.`,
      alertType: "success",
      duration: 1500
    });
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    headerStyle: styles.mainHeader,
    headerTintColor: globalHelpers.headerTintColor
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.publicKeyContainer}>
        <Image
          style={styles.backgroundIcon}
          resizeMode="cover"
          source={cryptoIcons[params.currency]}
        />
        <Button
          raised
          containerViewStyle={styles.publicKeyButton}
          backgroundColor={globalHelpers.buttonColor}
          borderRadius={5}
          fontSize={12}
          icon={{ name: "clipboard", type: "font-awesome" }}
          onPress={() => this.copyToClipboard(params.key)}
          title={params.key}
        />
        <QRCode size={250} value={params.key} />
        <MessageBarAlert ref="alert" />
        <BlockChainExplorer currency={params.currency} publicKey={params.key} />
        <View style={styles.inlineContainer}>
          <Button
            backgroundColor={globalHelpers.buttonColor}
            borderRadius={5}
            icon={{ name: "clipboard", type: "font-awesome" }}
            title="Edit"
            onPress={() =>
              this.props.navigation.navigate("CryptoForm", {
                name: params.name,
                publicKey: params.key
              })
            }
          />
          <Button
            backgroundColor={globalHelpers.deleteButtonColor}
            borderRadius={5}
            icon={{ name: "trash", type: "font-awesome" }}
            title="Delete"
          />
        </View>
      </View>
    );
  }
}

export default PublicKey;