import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SongDetails = ({ artist, song, lyrics }) => {
  return (
    <Fragment>
      <h1>{song} by {artist}</h1>
      <p>{lyrics}</p>
    </Fragment>
  );
};

SongDetails.propTypes = {
  lyrics: PropTypes.string.isRequired
};

export default SongDetails;
