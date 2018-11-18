import React from 'react';
import PropTypes from 'prop-types';

const Songs = ({ songs }) => {
  const songList = songs.map(song => {
    return <li key={song.id}>{song.title}</li>;
  });
  return  <ul>{songList}</ul>;
};

export default Songs;
