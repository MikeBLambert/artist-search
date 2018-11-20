import React, { Component, Fragment } from 'react';
import { getArtist } from '../../services/artistApi';
import Songs from './Songs';
import styles from './ArtistDetail.css';
// import PropTypes from 'prop-types';

export default class ArtistDetail extends Component {
  state = {
    artist: '',
    songs: [],
    loading: true
  };

  fetchSongs = () => {
    const id = this.props.location.pathname.slice(1).split('/')[1];
    getArtist(id)
      .then(({ artist, songs }) => {
        this.setState({ artist, songs, loading: false });
      });
  };

  componentDidMount() {
    this.fetchSongs();
  }

  render() {

    const { artist, songs, loading } = this.state;
    const songsComponent = !loading && <Songs songs={songs} artist={artist} />;

    return (
      <Fragment>
        <div id={styles.artistDetail}>
          <h1 id={styles.title}>Songs by {artist}</h1>
          {songsComponent}
        </div>
      </Fragment>
    );
  }

}
