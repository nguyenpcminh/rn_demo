import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ({...ortherProps}) => {
  return <TextInput style={styles.input} {...ortherProps} />;
};

const styles = StyleSheet.create({
  input: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2,
    elevation: 1,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#ccc',
    color: '#CF1218',
  },
});

export default Input;
