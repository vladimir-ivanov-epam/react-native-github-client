
import React, { PureComponent } from 'react';

import { View, Text, Image } from 'react-native';

import Loader from '../../components/loader';
import RepoList from '../../components/repoList';

import styles from './styles.js';

const User = ({ user, repos, isFetchingRepos }) => {

  const userRepos = (
    <View>

      <Text style={ styles.sectionTitle }>Repositories</Text>

      <View>
        { isFetchingRepos ? <Loader /> : <RepoList repos={ repos } /> }
      </View>

    </View>
  );

  const userProfile = user && (
    <View>
      <Text style={ styles.name }>{ user.name || user.login }</Text>

      { userRepos }

    </View>
  );

  return (
    <View style={ styles.container }>

      { userProfile || <Loader /> }

    </View>
  ); 
};

export default User;
