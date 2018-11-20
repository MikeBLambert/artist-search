import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import Header from '../header/Header';
import 'normalize.css';
import styles from './App.css';

export default function App() {
  return (
    <Fragment>
      <div id={styles.app}>
        <Header />
        <Router>
          <Switch>

            <Route path={ROUTES.SONG.path}
              component={ROUTES.SONG.Component} />

            <Route path={ROUTES.ARTIST.path}
              component={ROUTES.ARTIST.Component} />

            <Route path={ROUTES.ARTISTS.path}
              component={ROUTES.ARTISTS.Component} />

            <Redirect to={ROUTES.ARTISTS.path} />

          </Switch>
        </Router>
      </div>
    </Fragment>
  );
}
