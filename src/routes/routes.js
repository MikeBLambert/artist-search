import ArtistList from '../components/artists/ArtistList';
import Artist from '../components/artists/Artist';
import ArtistDetail from '../components/artistDetail/ArtistDetail';

export const ROUTES = {
  ARTISTS: {
    path: '/artists',
    Component: ArtistList,
    linkPath: () => '/artists'
  },
  ARTIST: {
    path: '/artists/:id',
    Component: ArtistDetail,
    linkPath: id => `/artists/${id}`
  }
};