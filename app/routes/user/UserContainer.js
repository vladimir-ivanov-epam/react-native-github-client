
import React, { PureComponent } from 'react';

import apiProvider from '../../lib/apiProvider.js';

import User from './User.js';

export default class UserContainer extends PureComponent {

  constructor(props) {

    super(props);

    this.state = {
      isLoading: true,
      userData: null
    };

  }

  async componentDidMount() {    

    const { data: userData } = await apiProvider.getUser();
    
    this.setState({ userData, isLoading: false });
    
  }  

  render() {
    return <User { ...this.state } />;
  }

}