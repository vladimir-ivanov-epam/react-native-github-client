import React, { Component } from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import { CardSection } from './common';

const ListItem = ({item}) => {
    const { titleStyle, left, right, imageContainer } = styles;
    return (
        <View>
            <CardSection>
                <View style={{flex: 1}}>
                    <Text style={[titleStyle, left]}>
                        {item.name}
                    </Text>
                </View>
                <Text style={[titleStyle, right]}>
                    {item.stargazers_count}
                </Text>

                <View style={{width: 30, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableHighlight style={imageContainer}>
                        <Image source={require('../images/star.png')} style={imageContainer} resizeMode="contain"/>
                    </TouchableHighlight>
                </View>
            </CardSection>
        </View>
    );
};

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 10
    },
    left: {
        textAlign : 'left'
    },
    right: {
        textAlign : 'right'
    },
    imageContainer: {
        height:16,
        width: 16,
    },
};

export { ListItem };
