import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import routes from './Routes';
import {Navbar} from './common/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <Switch>
          { routes }
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
