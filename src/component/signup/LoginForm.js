// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, Text } from 'react-native';

// third-part libraries
import firebase from 'firebase';

// components
import { Button, Card, CardSection, Input, Spinner } from '../../common';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    };
  }

  onButtonPress = () => {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail)
      })
  }

  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onLoginFail = () => {
    this.setState({ error: 'Authentication Failed.', loading: false });
  }

  renderButton = () => {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }

    return (
      <Button
        onPress={this.onButtonPress}
        text='Login'
      />
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder='user@mail.com'
            label='Email'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder='password'
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          { this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

export default LoginForm;
