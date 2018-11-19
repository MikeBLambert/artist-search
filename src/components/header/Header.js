import React, { Component, Fragment } from 'react';
import styles from './Header.css';

export default class Header extends Component {

  render() {
    return (
      <Fragment>
        <h1 id={styles.title}>Music Info Right Meow!</h1>
      </Fragment>
    );
  }
}
