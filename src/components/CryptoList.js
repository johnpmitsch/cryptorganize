import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, ScrollView } from "react-native";
import { Text, List, ListItem, Button, SearchBar } from "react-native-elements";
import CryptoData from "../helpers/CryptoData";
import styles from "../styles/styles";
import TopBar from "./TopBar";

class CryptoList extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.titleContainer}>
          <Text h3 style={styles.centerText}>
            My Public Keys
          </Text>
        </View>
        <ScrollView>
          <TopBar />
          <List>
            {CryptoData.map((item, i) => (
              <ListItem key={i} leftIcon={item.icon} title={item.title} />
            ))}
          </List>
        </ScrollView>
      </View>
    );
  }
}

export default CryptoList;
