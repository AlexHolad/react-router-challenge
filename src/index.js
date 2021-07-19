import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>{/* Add your links here */}</ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
