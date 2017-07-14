import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class Inputs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { viewStyle, inputStyle } = styles;
        return (
            <View style={viewStyle}>
                <TextInput style={inputStyle} placeholder="Login" underlineColorAndroid="transparent" />
                <TextInput style={inputStyle} placeholder="Password" underlineColorAndroid="transparent" secureTextEntry={true} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    viewStyle: {
        flex: 0.7,
        alignContent: 'center',
        justifyContent: 'center',
        /*backgroundColor: '#E6FF9E'*/
    },
    inputStyle: {
        fontSize: 16,
        borderColor: '#CCCCCC',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        height: 40,
        width: 230,
        textAlign: 'center',
        marginTop: 15,
        alignSelf: 'center'
    },
});

export default Inputs;