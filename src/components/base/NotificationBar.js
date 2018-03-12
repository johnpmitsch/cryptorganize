import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import styles from "../../styles/styles";

@connect(store => {
  return {
    message: store.messages.message
  };
})
class NotificationBar extends React.Component {
  render() {
    return (
      <View style={{ padding: 0, margin: 0 }}>
        {this.props.message &&
          <View style={styles.messageContainer}>
            <Text h4 style={styles.messageText}>
              {this.props.message}
            </Text>
          </View>}
      </View>
    );
  }
}

export default NotificationBar;
