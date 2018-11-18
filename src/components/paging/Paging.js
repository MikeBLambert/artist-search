import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const Paging = ({ currentPage, totalPages, updatePage }) => {

  return (
    <Fragment>
      {currentPage > 1 && <button onClick={()=>updatePage(currentPage - 1)}>Previous</button>}
      <h1>{currentPage} out of {totalPages}</h1>
      {totalPages > currentPage && <button onClick={()=>updatePage(currentPage + 1)}>Next</button>}
    </Fragment>
  );
};

// Paging.propTypes = {
//   currentPage: PropTypes.number.isRequired,
//   totalPages: PropTypes.number.isRequired,
//   updatePage: PropTypes.func.isRequired
// };


export default Paging;
