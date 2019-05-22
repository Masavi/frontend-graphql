import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const ALLUSERS = gql`
    query{
        getUsers{
            _id
            first_name
            email
            profile_img
        }
    }
`

class Users extends Component {
    render() { 
        return ( 
            <div>
                <Query query={ALLUSERS}>
                    {
                        ({data, error, loading})=>{
                            if(error) return <h4>Error</h4>
                            if(loading) return <h1>Cargando usuarios...</h1>
                            const users = data.getUsers.map(usuario=>(
                                <div key={usuario._id}>
                                    <br/>
                                    <br/>
                                    <h2>{usuario.first_name}</h2>
                                    <h3>{usuario.last_name}</h3>
                                    <h4>{usuario.email}</h4>
                                    <img src={usuario.profile_img} />
                                </div>
                            ))

                            return(
                                <React.Fragment>
                                    {
                                        users
                                    }
                                </React.Fragment>
                            )
                        }
                    }
                </Query>
            </div>
         );
    }
}
 
export default Users;