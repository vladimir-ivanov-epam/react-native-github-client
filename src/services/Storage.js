/**
 * Created by Pavel_Ryabichenko on 17.07.2017.
 */

import {
    AsyncStorage
} from 'react-native';

export const getCredentials = async (keys, callback) => {
    var value,collect;
    try {
        value = await AsyncStorage.multiGet(keys, (err, stores) => {
            let login = stores[0][1];
            let pass = stores[1][1];
            collect = {
                login: login,
                password: pass
            }
        });
    } catch (error) {
        console.log('Error: ',error);
    }
    return collect;
}
export const setCredentials = async (login, pass, callback) => {
    var value;
    try {
        value = await AsyncStorage.multiSet([['login', login], ['password', pass]]);
    } catch (error) {
        console.log(error);
    }
    return value;
}

export const getUserData = async (data) => {
    var value;
    try {
        value = await AsyncStorage.getItem('userdata', data);
    } catch (error) {
        console.log(error);
    }
    return value;
}
export const setUserData = async (data) => {
    var value;
    try {
        value = await AsyncStorage.setItem('userdata', data);
    } catch (error) {
        console.log(error);
    }
    return value;
}
