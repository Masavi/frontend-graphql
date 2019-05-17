import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import routes from './Routes';

function App() {
  return (
    <React.Fragment>
      <h1>Bienvenidos a mi app!!</h1>
      <Router>
        <Switch>
          { routes }
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
