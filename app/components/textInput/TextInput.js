
import React, { PureComponent } from 'react';
import { TextInput as NativeTextInput } from 'react-native';

import theme from '../../theme.js';
import styles from './styles.js';

export default class TextInput extends PureComponent {

  constructor(props) {

    super(props);

    this.state = { isFocused: false };

    this.onFocus = this.onFocus.bind(this);    
    this.onBlur = this.onBlur.bind(this);

  }

  onFocus() {
    this.setState({ isFocused: true });
  }

  onBlur() {
    this.setState({ isFocused: false });
  }

  render() {

    const { isFocused } = this.state;

    const style = {
      ...styles,
      borderColor: isFocused ? theme.accentColor : theme.secondaryColor
    };

    return (
      <NativeTextInput
        { ...this.props }
        style={ style }
        placeholderTextColor={ theme.placeholderColor }
        underlineColorAndroid="transparent"   
        onBlur={ this.onBlur }
        onFocus={ this.onFocus } />
    );

  }

}
