import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <List />
        </Route>
        <Route path="/:id">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}
