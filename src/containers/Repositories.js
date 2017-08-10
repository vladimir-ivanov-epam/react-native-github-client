import React, { Component } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { repositoriesFetch } from '../actions';
import { Spinner } from '../components/common';
import {ListItem, UserInfo} from "../components";

class Repositories extends Component{
    constructor(props)  {
        super(props);
    }
    static navigationOptions = {
        title: 'Repositories'
    };
    componentWillMount(){
        const { user } = this.props;
        if(user){
            this.props.repositoriesFetch(user);
        }
    }
    componentWillReceiveProps(nextProps){
        // Loading saved data
        if(this.props.user){
            //console.log(this.props.user);
            //this.props.repositoriesFetch(this.props.user);
            //<UserInfo user={this.props.user}/>
        }
    }
    _keyExtractor = (item, index) => item.id;
    _renderLoadingIndicator = () => {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
    }
    _renderError = () => {
        return <Text style={[styles.validationText]}>
            {this.props.error}
        </Text>;
    }
    _renderRow = ({ item, index }) => {
        return <ListItem item={item} />;
    };
    render(){
        return (
            <View style={styles.container}>
                <UserInfo user={this.props.user}/>
                { this._renderLoadingIndicator() }
                { this._renderError()}
                <FlatList
                    data={this.props.repositories}
                    extraData={this.props}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderRow}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#ecf0f1'}
});

const mapStateToProps = ({auth, repos}) => {
    const { repositories, error, loading } = repos;
    return {
        user: auth.user,
        repositories: repositories ,
        error: error,
        loading: loading
    };
};

export default connect(mapStateToProps, {
    repositoriesFetch
})(Repositories);
