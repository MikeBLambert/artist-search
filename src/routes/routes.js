import ArtistList from '../components/artists/ArtistList';
import ArtistDetail from '../components/artistDetail/ArtistDetail';
import Song from '../components/song/Song';

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
  },
  SONG: {
    path: '/lyrics/:artist/:song',
    Component: Song,
    linkPath: (artist, song) => `/lyrics/${artist}/${song}`
  }
};
