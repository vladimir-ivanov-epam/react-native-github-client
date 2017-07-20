
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getUser } from "../../ducks/user.js";

import User from './User.js';

class UserContainer extends PureComponent {

  constructor(props) {

    super(props);

    this.state = {
      isLoading: true
    };

  }

  async componentDidMount() {

    await this.props.getUser();
    
    this.setState({ isLoading: false });
    
  }  

  render() {

    const { user } = this.props;

    return <User { ...this.state } user={ user } />;
  }

}

export default connect(

  ({ user }) => ({ user }),

  { getUser }

)(UserContainer);
