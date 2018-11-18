import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Search = ({ updateSearchQuery }) => {
  return (
    <Fragment>
      <label htmlFor='search'>Search for an Artist</label>
      <input name='searchQuery' id='search' onChange={updateSearchQuery} />
    </Fragment>
  );
};

// Search.propTypes = {
//   updateSearchQuery: PropTypes.func.isRequired
// };

export default Search;
