import React from 'react';
import HolaMundo from './components/HolaMundo';

function App() {
  return (
      <React.Fragment>
          <h1>Helloooo</h1>
          <div className="App">
            <p>lorem ipsum dolor sit amet bla bla bla</p>
            <p>Esta es otra etiqueta</p>
            <a href="google.com">Clickeame (no hago nada jejej)</a>
          </div>
          <HolaMundo />
          <HolaMundo />
          <HolaMundo />
          <HolaMundo />
      </React.Fragment>
  );
}

export default App;
