import React, { Component } from 'react';
import styles from './Header.css';


export default class Header extends Component {

  render() {

    return (
      <header>
        <img src={require('../../img/cat.jpg')} alt='cat photo' />
        <h1 id={styles.title}>Music Meow!</h1>
      </header>
    );
  }
}
