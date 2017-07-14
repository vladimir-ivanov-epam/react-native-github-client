
import React from 'react';
import { Button } from 'react-native';

import styles from './styles.js';
import theme from '../../theme.js';

export default (props) => <Button style={ styles } color={ theme.primaryColor } { ...props } />;
