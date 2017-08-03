import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import RepoItem from '../components/RepoItem';
import { connect } from 'react-redux';
import { reposFetchData } from '../actions/repos';
import storage from '../storage/storage';

class UserInfo extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: false
    });

    constructor(props) {
        super(props);
        this.state = { isLoading: true, username: '' };
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        const username = await storage.getUserName();
        await this.props.fetchData('/user/repos');
        this.setState({ isLoading: false, username: username });
    }

    render() {        
        const { userInfoStyle, repoItemStyle} = styles; 
        
        return (
            <View style={userInfoStyle}>
                <Header username={this.state.username} />
                {this.state.isLoading && 
                <ActivityIndicator style={{ flex:0.5 }} size="large" />
                }
                {!this.state.isLoading &&
                <FlatList data={this.props.repos} keyExtractor={item => item.id} renderItem={({item}) => <RepoItem repoItem={item} />} />
                }
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        repos: state.repos,
        hasErrored: state.repoHasErrored,
        isLoading: state.repoIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(reposFetchData(url))
    };
};

const styles = StyleSheet.create({    
    userInfoStyle: {
        flex: 1,
        backgroundColor: '#fff'
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);