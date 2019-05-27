import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const InputField = ({ value, onChangeText }) => (
  <TextInput 
    style={styles.container}
    value={value}
    onChangeText={onChangeText}
  />
)

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired
};

export default InputField; 