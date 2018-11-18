export const getArtists = (page, searchQuery) => {
  const limit = 10;
  const offset = page * limit;
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchQuery}&fmt=json&limit=${limit}&offset=${offset}`)
    .then(res => res.json())
    .then(json => ({
      artists: json.artists,
      totalPages: Math.ceil(json.count / limit)
    }));
};
