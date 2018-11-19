import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES } from '../../routes/routes';

const Songs = ({ songs, artist }) => {
  const songList = songs.length > 0 ? songs.map(song => {
    return (
      <li key={song.id}>
        <Link to={ROUTES.SONG.linkPath(artist, song.title)}>
          {song.title}
        </Link>
      </li>
    );
  }) : <h1>We cannot find any songs for this artist ¯\_(ツ)_/¯ </h1>;

  return  (
    <Fragment>
      <h1>{artist}</h1>
      <ul>{songList}</ul>
    </Fragment>
  );
};

Songs.propTypes = {
  songs: PropTypes.array,
  artist: PropTypes.string
};

export default Songs;
