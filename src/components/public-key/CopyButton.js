import React from "react";
import { Clipboard, View } from "react-native";
import CryptoButton from "../base/CryptoButton";
import { connect } from 'react-redux';
import styles from "../../styles/styles";
import { addMessage, removeMessage } from "../../actions/messageActions.js";
import GlobalHelpers from "../../lib/GlobalHelpers";

@connect((store) => {
  return {};
})
class CopyButton extends React.Component {
  async copyToClipboard(text) {
    await Clipboard.setString(text);
    const message = "Public Key Copied";
    GlobalHelpers.displayMessage(this.props.dispatch, message, 1000);
  }

  render() {
    return (
      <View>
        <CryptoButton
          icon={{ name: "clipboard", type: "font-awesome" }}
          title="Copy"
          onPress={() => this.copyToClipboard(this.props.publicKey)}
        />
      </View>
    );
  }
}

export default CopyButton;
