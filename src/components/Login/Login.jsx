import React, { Component } from 'react';

class Login extends Component {
    state = { 
        message: "Estás en el componente Login"
    }
    render() { 
        return ( 
            <h1>{ this.state.message }</h1>
        );
    }
}
 
export default Login;