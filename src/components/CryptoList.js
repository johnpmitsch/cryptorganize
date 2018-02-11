import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Text, List, ListItem, Button, SearchBar } from "react-native-elements";
import { filter } from "lodash";
import { getPublicKeys } from "../lib/StorageHelper";
import PublicKey from "./public-key/PublicKey.js";
import GlobalHelpers from "../lib/GlobalHelpers";
import CryptoIcons from "../lib/CryptoIcons";
import styles from "../styles/styles";

const MessageBarManager = require("react-native-message-bar").MessageBarManager;
const MessageBarAlert = require("react-native-message-bar").MessageBar;

class CryptoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullList: [],
      visibleList: [],
      searchText: ""
    };
    this.setSearchText = this.setSearchText.bind(this);
    this.filterKeys = this.filterKeys.bind(this);
    this.clearSearchText = this.clearSearchText.bind(this);
    this.displayAlert = this.displayAlert.bind(this);
  }

  componentDidMount() {
    MessageBarManager.registerMessageBar(this.refs.alert);
    getPublicKeys().then(publicKeys => {
      this.setState({ fullList: publicKeys, visibleList: publicKeys });
    });
  }

  componentWillUnmount() {
    MessageBarManager.unregisterMessageBar();
  }

  clearSearchText() {
    this.setState({
      searchText: ""
    });
  }

  setSearchText(query) {
    let searchText = query;
    let data = this.state.fullList;
    let filteredData = this.filterKeys(searchText, data);
    this.setState({
      visibleList: filteredData,
      rawData: data
    });
  }

  filterKeys(searchText, keys) {
    let text = searchText.toLowerCase();
    return filter(keys, n => {
      let key = n.name.toLowerCase();
      return key.indexOf(text) !== -1;
    });
  }

  displayAlert(params) {
    MessageBarManager.showAlert({
      message: params.message,
      alertType: params.messageType || "success",
      duration: 1500
    });
  }

  render() {
    const { params } = this.props.navigation.state;
    if (params && params.message) this.displayAlert(params);
    return (
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.homeTitle}>Public Keys</Text>
        </View>
        <View style={styles.inlineContainer}>
          <View style={styles.buttonContainer}>
            <Button
              title="Add Key"
              borderRadius={5}
              icon={{ name: "plus", type: "font-awesome" }}
              backgroundColor={GlobalHelpers.buttonColor}
              onPress={() => this.props.navigation.navigate("CryptoForm", {})}
            />
          </View>
          <View style={styles.buttonContainer}>
            <SearchBar
              lightTheme
              round
              clearIcon
              containerStyle={styles.searchBar}
              onChangeText={this.setSearchText}
              onClearText={this.clearSearchText}
            />
          </View>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <FlatList
            data={this.state.visibleList}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <PublicKey />}
          />
        </TouchableWithoutFeedback>
        <MessageBarAlert ref="alert" />
      </View>
    );
  }
}

export default CryptoList;
