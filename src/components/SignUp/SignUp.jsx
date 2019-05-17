import React, { Component } from 'react';

class SignUp extends Component {
    state = { 
        message: "Componente Signup"
    }
    
    render() { 
        return ( 
            <h1> {this.state.message} </h1>
        );
    }
}
 
export default SignUp;