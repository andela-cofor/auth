// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, Text, View } from 'react-native';

// component
import { Header } from './src/common';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
