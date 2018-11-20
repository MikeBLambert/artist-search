import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './SongDetails.css';

const SongDetails = ({ artist, song, lyrics }) => {
  return (
    <Fragment>
      <div id={styles.container}>
        <h1>{song} by {artist}</h1>
        <p>{lyrics}</p>
      </div>
    </Fragment>
  );
};

SongDetails.propTypes = {
  lyrics: PropTypes.string.isRequired
};

export default SongDetails;
