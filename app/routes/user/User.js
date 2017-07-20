
import React, { PureComponent } from 'react';

import { View, Text, Image } from 'react-native';

import Loader from '../../components/loader';

import styles from './styles.js';

const User = ({ user, isLoading }) => {

  const userProfile = user && (
    <View>
      <Image source={{ uri: user.avatar_url }} style={ styles.avatar } />
      <Text style={ styles.name }>{ user.login }</Text>
    </View>
  );

  return (
    <View style={ styles.container }>

      { isLoading ? <Loader /> : userProfile }

    </View>
  ); 
};

export default User;
