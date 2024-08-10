import React from 'react';
import useApi from '../hooks/useApi';
import { Link } from 'react-router-dom';
import SongList from '../components/songList';
import PlaylistList from '../components/playlistList';
import AlbumList from '../components/albumList';
import ArtistList from '../components/artistList';
import GenreList from '../components/genreList';

const HomePage = () => {
  const { data: songs, loading: loadingSongs, error: errorSongs } = useApi(/songs/);
  const { data: playlists, loading: loadingPlaylists, error: errorPlaylists } = useApi(/playlists/);
  const { data: albums, loading: loadingAlbums, error: errorAlbums } = useApi(/albums/);
  const { data: artists, loading: loadingArtists, error: errorArtists } = useApi(/artists/);
  const { data: genres, loading: loadingGenres, error: errorGenres } = useApi(/genres/);

  if (loadingSongs || loadingPlaylists || loadingAlbums || loadingArtists || loadingGenres) {
    return <p>Loading...</p>;
  }

  if (errorSongs || errorPlaylists || errorAlbums || errorArtists || errorGenres) {
    return <p>Error fetching data.</p>;
  }

  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
  <ul style={{ listStyleType: 'none', padding: 0 }}>
    <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/login">Login</Link></li>
    <li style={{ display: 'inline' }}><Link to="/profile">Profile</Link></li>
  </ul>
</nav>
      <h1>Home Page</h1>
      <SongList songs={songs} />
      <PlaylistList playlists={playlists} />
      <AlbumList albums={albums} />
      <ArtistList artists={artists} />
      <GenreList genres={genres} />
    </div>
  );
};

export default HomePage;
