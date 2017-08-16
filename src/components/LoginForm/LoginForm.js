import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './_LoginForm';

import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

class LoginForm extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: false,
      isError: false,
      isDisabled: false,
      inputValue: '',
    };
  }

  handleSubmitButtonTouch() {
    this.setState({
      isLoading: true,
      isDisabled: true
    });
    setTimeout(() => {
      this.setState({
        isLoading: false,
        isDisabled: false,
        isError: true
      });
    }, 3000);
  }

  handleTextChange(event) {
    this.setState({
      inputValue: event.nativeEvent.text
    });

    if (this.state.isError) {
      this.setState({
        isError: false
      });
    }
  }

  render() {
    return (
      <View>
        <Input
          placeholder={'Login'}
          onChange={this.handleTextChange.bind(this)}
          value={this.state.inputValue}
        />
        <Input
          placeholder={'Password'}
          secureTextEntry={true}
          onChange={this.handleTextChange.bind(this)}
          value={this.state.inputValue}
        />
        <View style={styles.container}>
        <Spinner
          isLoading={this.state.isLoading}
        />
        <ErrorMessage
          isError={this.state.isError}
        />
        <SubmitButton
          onPress={this.handleSubmitButtonTouch.bind(this)}
          disabled={this.state.isDisabled}
        />
        </View>
      </View>
    );
  }
}

export default LoginForm;
