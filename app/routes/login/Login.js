
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import TextInput from '../../components/textInput';
import PasswordInput from '../../components/passwordInput';
import Button from '../../components/button';
import Loader from '../../components/loader';

import styles from './styles.js';

export default class Login extends PureComponent {

  constructor(props) {
    
    super(props);

    this.state = {      
      login: '',
      password: '',

      isLoading: false,
      isErred: false
    };

    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit() {

    this.setState({ isLoading: true, isErred: false });
    
    setTimeout(() => {
      this.setState({ isLoading: false, isErred: true })
    }, 3000);

  }

  render() {

    const { login, password, isLoading, isErred } = this.state;

    return (
      <View style={ styles.container }>
        
        <Text style={ styles.logo }>GitHub</Text>        
        
        <TextInput          
          placeholder="Login"
          autoCorrect={ false }
          value={ login }
          onChangeText={ (value) => this.setState({ login: value }) } />

        <PasswordInput 
          value={ password }
          onChangeText={ (value) => this.setState({ password: value }) } />

        <View style={ styles.statusWrapper }>
          
          { isLoading && <Loader size="large" /> }

          { 
            isErred && 
            <Text style={ styles.errorMessage }>Login and/or password are incorrect</Text> 
          }

        </View>

        <Button          
          disabled={ isLoading || !login || !password }
          title="Submit"
          onPress={ this.onSubmit } />

      </View>
    );

  } 

}
