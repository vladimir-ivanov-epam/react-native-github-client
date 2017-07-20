/**
 * Created by Pavel_Ryabichenko on 17.07.2017.
 */

import React, { Component } from 'react';
import axios from 'axios';

const head = {
    headers: { 'Content-Type': 'application/json' }
};
const loginUrl = 'https://api.github.com/user';

export const loginUser = (creds) => {
    //console.log(login);
    return axios({
            url: 'https://api.github.com/user',
            auth: {
                username: creds.login,
                password: creds.pass
            }
        });
};