
import React from 'react';
import { View, Text, Alert } from 'react-native';

import TextInput from '../../components/textInput';
import PasswordInput from '../../components/passwordInput';
import Button from '../../components/button';
import Loader from '../../components/loader';

import styles from './styles.js';

const Login = ({ username, password, isLoading, isSubmitting, onInputChange, onSubmit }) => {

  const form = (
    <View>
      <Text style={ styles.logo }>GitHub</Text>        
      
      <TextInput          
        placeholder="Username"
        autoCorrect={ false }
        value={ username }
        onChangeText={ (value) => onInputChange({ username: value }) } />

      <PasswordInput 
        value={ password }
        onChangeText={ (value) => onInputChange({ password: value }) } />

      <View style={ styles.statusWrapper }>
        
        { isSubmitting && <Loader size="large" /> }
      
      </View>

      <Button          
        disabled={ isSubmitting || !username || !password }
        title="Submit"
        onPress={ onSubmit } />

    </View>
  );


  return (
    <View style={ styles.container }>

      {
        isLoading ? <Loader /> : form
      }
      
    </View>
  );
};

export default Login;
