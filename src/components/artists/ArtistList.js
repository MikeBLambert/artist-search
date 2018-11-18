import React, { Component, Fragment } from 'react';
import Paging from '../paging/Paging';
import Artist from './Artist';
import Search from '../search/Search';
import { getArtists } from '../services/artistApi';

export default class ArtistList extends Component {
  state = {
    currentPage: 1,
    totalPages: 1,
    artists: [],
    searchQuery: ''
  };

  fetchArtist = () => {
    const { currentPage, searchQuery } = this.state;
    getArtists(currentPage, searchQuery)
      .then(({ artists, totalPages }) => {
        this.setState({ artists, totalPages });
      });
  }

  componentDidMount() {
    // this.fetchArtist();
  }

  handlePageUpdate = page => {
    this.setState({ currentPage: page }, () => {
      this.fetchArtist();
    });
  };

  handleSearchQueryUpdate = ({ target }) => {
    this.setState({ searchQuery: target.value }, () => {
      this.fetchArtist();
    });

  }

  render() {
    const { currentPage, totalPages, artists } = this.state;
    // const artistComponent = artists ? artists.map(artist => {
    //   return <Artist key={artist.id} id={artist.id} name={artist.name} />;
    // }) : <h1>No results found</h1>;

    const artistComponent = artists.map(artist => {
      return <Artist key={artist.id} id={artist.id} name={artist.name} />;
    });
    return (
      <Fragment>
        <Search updateSearchQuery={this.handleSearchQueryUpdate} />
        <Paging currentPage={currentPage} totalPages={totalPages} updatePage={this.handlePageUpdate} />
        {artistComponent}
      </Fragment>
    );
  }
}
