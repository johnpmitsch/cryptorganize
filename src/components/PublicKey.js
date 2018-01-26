import React from "react";
import { Alert, Image, Clipboard, View, ScrollView } from "react-native";
import { Button, Text, ListItem } from "react-native-elements";
import { NavigationActions } from "react-navigation";
import styles from "../styles/styles";
import QRCode from "react-native-qrcode-svg";
import GlobalHelpers from "../lib/GlobalHelpers";
import BlockChainExplorer from "./BlockChainExplorer";
import { deletePublicKey } from "../lib/StorageHelper";
import cryptoIcons from "../lib/cryptoIcons";

const MessageBarManager = require("react-native-message-bar").MessageBarManager;
const MessageBarAlert = require("react-native-message-bar").MessageBar;

class PublicKey extends React.Component {
  constructor(props) {
    super(props);
    this.removeKey = this.removeKey.bind(this);
    this.confirmDeletion = this.confirmDeletion.bind(this);
  }

  componentDidMount() {
    MessageBarManager.registerMessageBar(this.refs.alert);
  }

  componentWillUnmount() {
    MessageBarManager.unregisterMessageBar();
  }

  async copyToClipboard(text) {
    await Clipboard.setString(text);
    MessageBarManager.showAlert({
      message: `Key copied to clipboard.`,
      alertType: "success",
      duration: 1500
    });
  }

  confirmDeletion(params) {
    Alert.alert(
      "Confirm Deletion",
      `Are you sure you want to delete ${params.name}?`,
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel"
        },
        { text: "Delete", onPress: () => this.removeKey(params) }
      ],
      { cancelable: false }
    );
  }

  removeKey(params) {
    const key = {
      name: params.name,
      publicKey: params.publicKey,
      currency: params.currency
    };
    deletePublicKey(key)
      .then(key => {
        const message = `${key.name} removed`;
        GlobalHelpers.clearNavStackAndNavigate(this.props.navigation, "Main", {
          message: message
        });
      })
      .catch(err => {
        const message = `Error removing ${key}`;
        GlobalHelpers.clearNavStackAndNavigate(this.props.navigation, "Main", {
          message: message,
          messageType: "error"
        });
      });
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
    headerStyle: styles.mainHeader,
    headerTintColor: GlobalHelpers.headerTintColor
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
          backgroundColor={GlobalHelpers.buttonColor}
          borderRadius={5}
          fontSize={12}
          icon={{ name: "clipboard", type: "font-awesome" }}
          onPress={() => this.copyToClipboard(params.publicKey)}
          title={params.publicKey}
        />
        <QRCode size={250} value={params.publicKey} />
        <BlockChainExplorer explorerUrl={params.explorerUrl} />
        <View style={styles.inlineContainer}>
          <Button
            backgroundColor={GlobalHelpers.buttonColor}
            borderRadius={5}
            icon={{ name: "pencil-square-o", type: "font-awesome" }}
            title="Edit"
            onPress={() =>
              this.props.navigation.navigate("CryptoForm", {
                name: params.name,
                publicKey: params.publicKey,
                currency: params.currency,
                explorerUrl: params.explorerUrl
              })}
          />
          <Button
            backgroundColor={GlobalHelpers.deleteButtonColor}
            borderRadius={5}
            icon={{ name: "trash", type: "font-awesome" }}
            title="Delete"
            onPress={() => this.confirmDeletion(params)}
          />
        </View>
        <MessageBarAlert ref="alert" />
      </View>
    );
  }
}

export default PublicKey;
