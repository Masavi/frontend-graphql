import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import routes from './Routes';
import { ApolloProvider } from 'react-apollo';
import {Navbar} from './common/Navbar';
import { Users } from './components/Users';

import clientGraphql from './Graphql';

function App() {
  return (
    <ApolloProvider client={clientGraphql}>
      <Router>
        <React.Fragment>
          <Navbar />
            <Switch>
              { routes }
            </Switch>
        </React.Fragment>
        <Users />
      </Router>
    </ApolloProvider>

  );
}

export default App;
