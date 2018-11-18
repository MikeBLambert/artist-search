import React, { Component } from 'react';
import { getArtists } from '../services/artistApi';
import Songs from './Songs';
import PropTypes from 'prop-types';

export default class ArtistDetail extends Component {


  state = {
    artist: []
  }

  render() {

    return (
      <Songs />
    );
  }

}
