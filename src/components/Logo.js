import React from 'react';
import { View, Image } from 'react-native';

const Logo = () => {
    const { viewStyle, imageStyle } = styles;

    return (
        <View style={viewStyle}>
            <Image style={imageStyle} source={require('../../images/github-logo.png')} />
        </View>
    );
};

const styles = {
    viewStyle: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        /*backgroundColor: '#FF6075'*/
    },
    imageStyle: {
        width: 220,
        height: 90,
        alignSelf: 'center'
    }
};

export default Logo;