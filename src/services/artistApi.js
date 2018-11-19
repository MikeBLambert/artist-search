export const getArtists = (page, searchQuery) => {
  const limit = 10;
  const offset = (page - 1) * limit;
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchQuery}&fmt=json&limit=${limit}&offset=${offset}`)
    .then(res => res.json())
    .then(json => ({
      artists: json.artists,
      totalPages: Math.ceil(json.count / limit)
    }));
};

export const getArtist = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/artist/${id}?fmt=json&inc=works`)
    .then(res => res.json())
    .then(json => ({
      artist: json.name,
      songs: json.works
    }));
};
