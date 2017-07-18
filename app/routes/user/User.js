
import React, { PureComponent } from 'react';

import { View, Text, Image } from 'react-native';

import Loader from '../../components/loader';

import styles from './styles.js';

const User = ({ userData, isLoading }) => {

  const userProfile = userData && (
    <View>
      <Image source={{ uri: userData.avatar_url }} style={ styles.avatar } />      
      <Text style={ styles.name }>{ userData.login }</Text>
    </View>
  );

  return (
    <View style={ styles.container }>

      { isLoading ? <Loader /> : userProfile }

    </View>
  ); 
}

export default User;
