export const getLyrics = (artist, song) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
    .then(res => res.json())
    .then(json => ({
      lyrics: json.lyrics
    }));
};
