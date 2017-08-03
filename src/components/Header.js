import React, { Component } from 'react';
import { View, Text } from 'react-native';


class Header extends Component {

    render() {
        return (
            <View style={styles.viewStyle}><Text style={styles.textStyle}>{this.props.username}</Text></View>
        );
    }
};

const styles = {
    viewStyle: {
    },
    textStyle: {
        fontSize: 18,
        padding: 10,
        fontWeight: 'bold',
        backgroundColor: '#ececec',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        textAlign: 'center',
        shadowColor: '#000'
    }
}

export default Header;