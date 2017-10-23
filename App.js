// react libraries
import React from 'react';

// react-native libraries
import { View } from 'react-native';

// third-party librariesß
import firebase from 'firebase';

// component
import { Header, Button } from './src/common';
import LoginForm from './src/component/signup/LoginForm';
import {Spinner} from "./src/common/Spinner";

export default class App extends React.Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBf6OSIXDwm0SZLByhrn3oPqQAmIwwWGWY',
      authDomain: 'auth-dc86f.firebaseapp.com',
      databaseURL: 'https://auth-dc86f.firebaseio.com',
      projectId: 'auth-dc86f',
      storageBucket: 'auth-dc86f.appspot.com',
      messagingSenderId: '386415628919'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }


  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ height: 50 }}>
            <Button

              onPress={() => firebase.auth().signOut()}
              text='Log Out'
            />
          </View>
        );
      case false:
        return <LoginForm />;
      default:
         return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        { this.renderContent()}
      </View>
    );
  }
}
