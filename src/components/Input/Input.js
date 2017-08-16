import React from 'react';
import { TextInput } from 'react-native';
import styles from './_Input';


const Input = (props) => (
  <TextInput
    style={styles.textInput}
    value={props.inputValue}
    onChange={props.onChange.bind(this)}
    placeholder={props.placeholder}
    secureTextEntry={props.secureTextEntry}
  />
);

export default Input;
