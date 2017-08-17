import React from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import Header from './src/components/Header/Header';
import LoginForm from './src/components/LoginForm/LoginForm';


const App = () => {
  const { viewStyles } = styles;

  return (
    <View style={viewStyles}>
      <Header />
      <LoginForm />
    </View>
  );
};

const styles = {
  viewStyles: {
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1,
    justifyContent: 'center'
  }
};


AppRegistry.registerComponent('react_native_github_client', () => App);
