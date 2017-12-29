import React from 'react';
import CryptoList from './components/CryptoList';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
				<View>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Cryptorganize', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <CryptoList />
				</View>
    );
  }
}
