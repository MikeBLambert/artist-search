# Artist Search

Search for artists by name.

## Requirements

* Create a search component to search for artists by name
  * Search component should display a list of matching artists
  * Use `http://musicbrainz.org/ws/2/artist?query=nirvana&fmt=json&limit=25`
  * Allow paging through artists
* Create an artists page which lists a list of all works by an artist
  * Use `http://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?fmt=json&inc=works`
* Create a works page which displays the lyrics of a song
  * Use `https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search` to get lyrics

# Testing

* Snapshot testing
* Enzyme testing

