import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, ScrollView, Image } from "react-native";
import { Text, List, ListItem, Button, SearchBar } from "react-native-elements";
import { filter } from "lodash";
import CryptoData from "../lib/CryptoData";
import globalVars from "../lib/globalVars";
import cryptoIcons from "../lib/cryptoIcons";
import styles from "../styles/styles";

class CryptoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullList: CryptoData,
      visibleList: CryptoData,
      searchText: ""
    };
    this.setSearchText = this.setSearchText.bind(this);
    this.filterKeys = this.filterKeys.bind(this);
    this.clearSearchText = this.clearSearchText.bind(this);
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
      let key = n.title.toLowerCase();
      return key.indexOf(text) !== -1;
    });
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.aboveListContainer}>
            <View style={styles.buttonContainer}>
              <Button
                title="Add Key"
                borderRadius={5}
                icon={{ name: "plus", type: "font-awesome" }}
                backgroundColor={globalVars.buttonColor}
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
          <List>
            {this.state.visibleList.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={
                  <Image
                    style={styles.cryptoIcon}
                    source={cryptoIcons[item.currency]}
                    resizeMode="contain"
                  />
                }
                onPress={() =>
                  this.props.navigation.navigate("PublicKey", {
                    title: item.title,
                    key: item.key,
                    currency: item.currency
                  })
                }
              />
            ))}
          </List>
        </ScrollView>
      </View>
    );
  }
}

export default CryptoList;
