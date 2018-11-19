import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';

const Search = ({ updateSearchQuery }) => {
  return (
    <Fragment>
      <div id={styles.searchBar}>
        <label htmlFor='search'>Search for an Artist</label>
        <input name='searchQuery' id='search' onChange={updateSearchQuery} />
      </div>
    </Fragment>
  );
};

Search.propTypes = {
  updateSearchQuery: PropTypes.func.isRequired
};

export default Search;
