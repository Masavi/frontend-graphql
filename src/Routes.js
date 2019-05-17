import React from 'react';
import {Route} from 'react-router-dom';
import {Login} from './components/Login';
import {SignUp} from './components/SignUp';

export default [
    <React.Fragment>
        <Route exact path="/login" component={ Login }></Route>
        <Route exact path="/signup" component={ SignUp} ></Route>
    </React.Fragment>
];