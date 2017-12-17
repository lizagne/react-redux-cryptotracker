import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, CryptoContainer } from './src/components';
import { Provider } from 'react-redux';
import Store from './src/Store';

export default class App extends Component {
  render() {
    return (
      //The Provider accepts one argument — which is our store. The Provider role is to glue React and Redux together.
      <Provider store={ Store }>
        <View style={styles.container}>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
