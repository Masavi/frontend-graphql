import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './Routes';
import { Navbar } from './common/Navbar';

import clientGraphQl from './Graphql';

function App() {
  return (
    <ApolloProvider client={clientGraphQl}>
      <React.Fragment>
        <Navbar />
        <Router>
          <Switch>
            {routes}
          </Switch>
        </Router>
      </React.Fragment>
    </ApolloProvider>
  );
}

export default App;
