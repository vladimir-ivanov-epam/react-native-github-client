import React from 'react';
import { View, Text } from 'react-native';
import styles from './_Header';

const Header = () => (
    <View style={styles.viewStyles}>
      <Text style={styles.textStyles}>GitHub</Text>
    </View>
);

export default Header;
