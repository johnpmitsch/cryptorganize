import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, ScrollView } from 'react-native';
import { Text, List, ListItem, Button, SearchBar } from 'react-native-elements';
import CryptoData from '../helpers/CryptoData';
import styles from '../styles/styles';

const doNothing = () => {};
class CryptoList extends React.Component {
    render() {
      return (
        <View>
          <View style={styles.titleContainer}>
            <Text h3 style={styles.centerText}>My Public Keys</Text>
          </View>
          <ScrollView>
            <View style={styles.aboveListContainer}>
              <View style={styles.buttonContainer}>
                <Button
                  title='Add Key'
                  borderRadius={5}
                  icon={{name: 'plus', type: 'font-awesome'}}
                  backgroundColor="#3498db" />
              </View>
              <View style={styles.buttonContainer}>
                <SearchBar
                  lightTheme
                  round
                  containerStyle={styles.searchBar}
                  onChangeText={doNothing}
                  onClearText={doNothing}
                  placeholder='Type Here...' />
              </View>
            </View>
            <List>
              {
                CryptoData.map((item, i) => (
                  <ListItem
                    key={i}
                    leftIcon={item.icon}
                    title={item.title}
                  />
                ))
              }
            </List>
          </ScrollView>
        </View>
      )
    }
}

export default CryptoList;
