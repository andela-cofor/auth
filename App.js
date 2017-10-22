// react libraries
import React from 'react';

// react-native libraries
import { View } from 'react-native';

// third-party librariesß
import firebase from 'firebase';

// component
import { Header } from './src/common';
import LoginForm from './src/component/signup/LoginForm';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBf6OSIXDwm0SZLByhrn3oPqQAmIwwWGWY',
      authDomain: 'auth-dc86f.firebaseapp.com',
      databaseURL: 'https://auth-dc86f.firebaseio.com',
      projectId: 'auth-dc86f',
      storageBucket: 'auth-dc86f.appspot.com',
      messagingSenderId: '386415628919'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
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
