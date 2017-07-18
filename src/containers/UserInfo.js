/**
 * Created by Pavel_Ryabichenko on 17.07.2017.
 */

import React, { Component } from 'react';
import {
    Button,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Moment from 'moment';

class UserInfo extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'User Info'
    });
    render(){
        const { navigate } = this.props.navigation;
        let userdata = this.props.navigation.state.params.userdata;
        let userInfo = {
            avatar: userdata.avatar_url.toString(),
            email: userdata.email,
            login: userdata.login,
            created: userdata.created_at.toString()
        }
        return (
            <View style={styles.container}>
                <Image style={styles.avatarImg} source={{uri: userInfo.avatar}} />
                <Text>Login - {userInfo.login}</Text>
                <Text>Created - {Moment(userInfo.created).format('d MMM')}</Text>
                <Button
                    onPress={() => navigate('Home')}
                    title="GoBack"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    avatarImg:   { width: 300, height: 100, padding: 10 }
});

export { UserInfo };
