import React, { Fragment } from 'react';

export default function Paging({ currentPage, totalPages, updatePage }) {


  return (
    <Fragment>
      {currentPage > 1 && <button onClick={()=>updatePage(currentPage - 1)}>Previous</button>}
      <h1>{currentPage} of {totalPages}</h1>
      {totalPages > currentPage && <button onClick={()=>updatePage(currentPage + 1)}>Next</button>}
    </Fragment>
  );
}
