import React from "react";
import styles from "../styles/styles";
import { View } from "react-native";
import { Button, SearchBar } from "react-native-elements";

const doNothing = () => {};
class TopBar extends React.Component {
  render() {
    return (
      <View style={styles.aboveListContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="Add Key"
            borderRadius={5}
            icon={{ name: "plus", type: "font-awesome" }}
            backgroundColor="#3498db"
          />
        </View>
        <View style={styles.buttonContainer}>
          <SearchBar
            lightTheme
            round
            containerStyle={styles.searchBar}
            onChangeText={doNothing}
            onClearText={doNothing}
          />
        </View>
      </View>
    );
  }
}

export default TopBar;
