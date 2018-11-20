import React, { Component, Fragment } from 'react';
import { getLyrics } from '../../services/lyricsApi';
import SongDetails from './SongDetails';
import styles from './Song.css';

export default class Song extends Component {

  state = {
    lyrics: '',
    artist: '',
    song: '',
    loading: true,
  };

  componentDidMount() {
    const artist = this.props.location.pathname.slice(1).split('/')[1];
    const song = this.props.location.pathname.slice(1).split('/')[2];

    getLyrics(artist, song)
      .then(result => {
        this.setState({ lyrics: result.lyrics, artist, song, loading: false });
      });
  }

  render() {
    const { artist, song, lyrics, loading } = this.state;

    return (
      <Fragment>
        <div className={styles.container}>
          {!loading && <SongDetails artist={artist} song={song} lyrics={lyrics} />}
        </div>
      </Fragment>
    );
  }
}
