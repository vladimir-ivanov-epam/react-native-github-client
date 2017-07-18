
import React, { PureComponent } from 'react';
import { Alert } from 'react-native';

import apiProvider from '../../lib/apiProvider.js';

import Login from './Login.js';

export default class LoginContainer extends PureComponent {

  constructor(props) {

    super(props);

    this.state = { 
      username: '',
      password: '',
      isLoading: true,
      isSubmitting: false
    };

    this.login = this.login.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  async componentDidMount() {   

    const { navigation } = this.props;
    const isAuthenticated = await apiProvider.isAuthenticated();

    if (isAuthenticated) {
      return navigation.navigate('User');
    }

    this.setState({ isLoading: false });

  }

  async login() {

    this.setState({ isSubmitting: true });

    const { navigation } = this.props;
    const { username, password } = this.state;
    const isAuthenticated = await apiProvider.login(username, password);

    this.setState({ isSubmitting: false });

    if (!isAuthenticated) {
      return Alert.alert("Error", "Unable to login with provided username and password")
    }

    navigation.navigate('User');
    
  }

  onInputChange(diff) {
    this.setState(diff);
  }

  render() {    

    return <Login
      { ...this.state }
      onSubmit={ this.login }
      onInputChange={ this.onInputChange } />;
  }

} 
