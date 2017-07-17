import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class UserInfo extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'GitHub user info'
    });

    render() {
        const userInfo = this.props.navigation.state.params.data;
        const { avatar, userName, userInfoStyle } = styles; 
        console.log(userInfo);
        return (
            <View style={userInfoStyle}>
                <Image style={avatar} source={{uri: userInfo.avatar_url}} />
                <Text style={userName}>{userInfo.login}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({    
    userInfoStyle: {
        flex: 1,
        backgroundColor: '#ececec',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    avatar: {
        width: 150,
        height: 150,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});