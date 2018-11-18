import React, { Component } from 'react';
import { getArtist } from '../services/artistApi';
import Songs from './Songs';
// import PropTypes from 'prop-types';

export default class ArtistDetail extends Component {
  state = {
    songs: []
  };

  fetchSongs = () => {
    const id = this.props.location.pathname.slice(1).split('/')[1];
    getArtist(id)
      .then(({ songs }) => {
        this.setState({ songs });
      });
  };

  componentDidMount() {
    this.fetchSongs();
  }

  render() {

    return (
      <Songs songs={this.state.songs}/>
    );
  }

}
