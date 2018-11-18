import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default function App() {

  return (
    <Router>
      <Switch>
        <Route path={ROUTES.ARTIST.path} component={ROUTES.ARTIST.Component} />
        <Route path={ROUTES.ARTISTS.path} component={ROUTES.ARTISTS.Component} />
      </Switch>
    </Router>
  );
}
