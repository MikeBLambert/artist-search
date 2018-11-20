import React, { Component, Fragment } from 'react';
import Paging from '../paging/Paging';
import Artist from './Artist';
import Search from '../search/Search';
import { getArtists } from '../../services/artistApi';
import styles from './ArtistList.css';

export default class ArtistList extends Component {
  state = {
    currentPage: 1,
    totalPages: 1,
    artists: [],
    searchQuery: ''
  };

  fetchArtist = () => {
    const { currentPage, searchQuery, score } = this.state;
    getArtists(currentPage, searchQuery)
      .then(({ artists, totalPages }) => {
        this.setState({ artists, totalPages, score });
      });
  };

  handlePageUpdate = page => {
    this.setState({ currentPage: page }, () => {
      this.fetchArtist();
    });
  };

  handleSearchQueryUpdate = ({ target }) => {
    this.setState({ searchQuery: target.value }, () => {
      {this.state.searchQuery.length > 0 && this.fetchArtist();}
    });
  };

  render() {
    const { currentPage, totalPages, artists } = this.state;

    const artistComponent = artists.map(artist => {
      return <Artist key={artist.id} id={artist.id} name={artist.name} />;
    });
    const pagingComponent = artists.length > 0 &&
      <Paging currentPage={currentPage}
        totalPages={totalPages}
        updatePage={this.handlePageUpdate}
      />;

    return (
      <Fragment>
        <div id={styles.artistList}>
          <Search updateSearchQuery={this.handleSearchQueryUpdate} />
          <div id={styles.artistDisplay}>
            {pagingComponent}
            {artistComponent}
          </div>
        </div>
      </Fragment>
    );
  }
}
