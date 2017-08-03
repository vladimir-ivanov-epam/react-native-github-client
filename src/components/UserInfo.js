import React from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';

const UserInfo = ({user}) => {
    const { textStyle, viewStyle, imageContainer, plusBtn  } = styles;
    return (
        <View style={viewStyle}>
            <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <TouchableHighlight style={imageContainer}>
                    <Image style={imageContainer} source={{uri: user.avatar_url}} />
                </TouchableHighlight>
                <Text style={textStyle}>{user.login}</Text>
            </View>
            <View style={{width: 30, justifyContent: 'center', alignItems: 'center',}}>
                <TouchableHighlight underlayColor="white">
                    <Text style={plusBtn}>+</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        height: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        flexDirection: 'row'
    },
    textStyle: {
        fontSize: 20,
        paddingLeft: 10
    },
    imageContainer: {
        height:32,
        width: 32,
        borderRadius: 16,
    },
    plusBtn: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    }
};

export { UserInfo };
