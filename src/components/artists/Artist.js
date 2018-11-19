import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import ArtistDetail from '../artistDetail/ArtistDetail';

export default function Artist({ id, name }) {


  return (
    <div>
      <h3>{name}</h3>
      <Link to={ROUTES.ARTIST.linkPath(id)}>See all songs</Link>
    </div>
  );
}
