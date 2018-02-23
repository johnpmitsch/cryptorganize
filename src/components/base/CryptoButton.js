import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import GlobalHelpers from "../../lib/GlobalHelpers";
import styles from "../../styles/styles";

class CryptoButton extends React.Component {
  render() {
    const color = this.props.disabled ? "gray" : this.props.color || "blue";
    const icon = this.props.icon;
    if (icon) icon.color = color;
    return (
      <View>
        <Button
          backgroundColor="white"
          disabled={this.props.disabled}
          containerViewStyle={this.props.containerViewStyle}
          containerStyle={{ marginTop: 10 }}
          buttonStyle={{ padding: 0, margin: 0 }}
          textStyle={{ color: color }}
          icon={icon}
          title={this.props.title}
          onPress={this.props.onPress}
        />
      </View>
    );
  }
}

export default CryptoButton;
