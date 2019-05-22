import React, { Component } from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';

import LoginForm from './loginForm';

const LOGIN = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

class Login extends Component {
    state = { 
        message: "Estás en el componente Login"
    }

    catchData = data => {
      console.log(data);
      const { token} = data.login;
      localStorage.setItem('appToken', token);
      this.props.history.push('/home');
    }

    catchError = error => {
      console.log(error);
    }

    handleMutation = (login, values) => {
      console.log(values)
      login({variables: {...values}})
    }

    render() { 
        return ( 
            <div>
              <Mutation
                mutation={LOGIN}
              >
                {
                  (login, {data, error, loading }) => {
                    if (data)  this.catchData(data);
                    if (error) this.catchError(error);
                    if (loading) return <h1>Loading..</h1>
                    return (
                      <LoginForm
                        handleMutation={(values) =>
                        this.handleMutation(login, values)}
                      />
                    );
                  }
                }
              </Mutation>
            </div>
        );
    }
}

export default Login;