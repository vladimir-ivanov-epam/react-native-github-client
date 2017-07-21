
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../../ducks/user.js';
import { getRepos } from '../../ducks/repos.js';

import User from './User.js';

class UserContainer extends PureComponent {

  constructor(props) {

    super(props);

    this.state = { isFetchingRepos: true };

  }

  async componentDidMount() {

    await this.props.getUser();
    await this.fetchRepos();
    
  }

  async fetchRepos() {

    this.setState({ isFetchingRepos: true });
    await this.props.getRepos();
    this.setState({ isFetchingRepos: false });

  }

  render() {

    const { user, repos } = this.props;

    return <User { ...this.state } user={ user } repos={ repos } />;
  }

}

export default connect(

  ({ user, repos }) => ({ user, repos }),

  { getUser, getRepos }

)(UserContainer);
