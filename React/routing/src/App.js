import React from 'react';
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";

import Home from './Home';
import About from './About';

function App() {
  return (
    <div>
      <header>

        <Link to='/home'>
          Home
        </Link>

        <Link to='/about'>
          About
        </Link>


      </header>

      <main>
        <Switch>
          <Route
            path='/home'
            component={Home}
            exact
          />

          <Route
            path='/about'
            component={About}
          />


        </Switch>
      </main>


    </div>
  );
}

export default App;
