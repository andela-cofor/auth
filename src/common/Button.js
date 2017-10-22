// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, text }) => {
  const { buttonStyle, buttonTextStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle} >
      <Text style={buttonTextStyle} >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5

  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,

  }
})

export { Button };
