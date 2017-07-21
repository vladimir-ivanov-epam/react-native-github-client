
import React from 'react';
import { FlatList, View, Text } from 'react-native';

import styles from './styles.js';

const RepoList = ({ repos }) => {

  const renderItem = ({ item }) => (
    <View style={ styles.item }>
      <Text style={ styles.name } >{ item.name }</Text>
      <Text style={ styles.stargazers }>{ item.stargazers_count }</Text>
      <Text>star</Text>
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
