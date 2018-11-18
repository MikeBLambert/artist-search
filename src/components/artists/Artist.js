import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default function Artist({ id, name }) {


  return (
    <div>
      <h3>{name}</h3>
      <Link to={ROUTES.ARTIST.linkPath(id)}>Link</Link>
    </div>
  );
}
