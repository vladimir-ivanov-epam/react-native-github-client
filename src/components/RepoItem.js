import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

class RepoItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { repoItemStyle, repoItemTextStyle, repoItemStarCountStyle, repoItemStarStyle } = styles;

        return (
            <View style={repoItemStyle}>
                <Text style={repoItemTextStyle}>{this.props.repoItem.name}</Text>
                <Text style={repoItemStarCountStyle}>{this.props.repoItem.stargazers_count}</Text>
                <TouchableOpacity>
                    <Image source={require('../../images/github-star.png')} style={repoItemStarStyle} resizeMode="contain"/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    repoItemStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        padding: 10
    },
    repoItemTextStyle: {
        color: '#000',
        flex: 1,
        marginRight: 20,
        fontSize: 18
    },
    repoItemStarCountStyle: {
        marginRight: 20,
        fontSize: 18
    },
    repoItemStarStyle: {
        width: 38,
        height: 38
    }
};

export default RepoItem;