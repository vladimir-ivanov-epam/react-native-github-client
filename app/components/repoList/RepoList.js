
import React from 'react';
import { FlatList, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import styles from './styles.js';

const RepoList = ({ repos }) => {

  const renderItem = ({ item }) => (
    <View style={ styles.item }>
      <Text style={ styles.name } >{ item.name }</Text>
      <Text style={ styles.stargazers }>{ item.stargazers_count }</Text>
      <Icon name="star" size={ 22 } color="gold" />
    </View>
  );

  return <FlatList
    style={ styles.list }
    data={ repos }
    keyExtractor={ (item) => item.id }
    renderItem={ renderItem }
  />
};

export default RepoList;
