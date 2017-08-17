import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';

import styles from './_SubmitButton';


const SubmitButton = (props) => (
    <View>
      <TouchableHighlight
        style={props.disabled ? [styles.button, styles.disableButton] : styles.button}
        onPress={props.onPress.bind(this)}
        underlayColor={'#777'}
        disabled={props.disabled}
      >
        <Text style={styles.buttonText} > Submit </Text>
      </TouchableHighlight>
    </View>
);

export default SubmitButton;
