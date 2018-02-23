import React from "react";
import { Clipboard, View } from "react-native";
import CryptoButton from "../base/CryptoButton";
import styles from "../../styles/styles";

class CopyButton extends React.Component {
  async copyToClipboard(text) {
    await Clipboard.setString(text);
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
