import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {Login} from './components/Login';
import {SignUp} from './components/SignUp';

const Logout = () => {
    localStorage.removeItem("appToken");
    return <Redirect to='/login'/>
}

export default [
    <React.Fragment key={"Routes"}>
        <Route exact path="/login" component={ Login } ></Route>
        <Route exact path="/signup" component={ SignUp} ></Route>
        <Route exact path="/logout" component={ Logout } ></Route>
    </React.Fragment>
];