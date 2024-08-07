// src/pages/HomePage.jsx
import React from 'react';
import useApi from '../hooks/useApi';
import { ENDPOINTS } from '../config/ApiEndpoints';
import SongList from '../components/songList';
import PlaylistList from '../components/playlistList';
import AlbumList from '../components/albumList';
import ArtistList from '../components/artistList';
import GenreList from '../components/genreList';

const HomePage = () => {
  const { data: songs, loading: loadingSongs, error: errorSongs } = useApi(ENDPOINTS.songs);
  const { data: playlists, loading: loadingPlaylists, error: errorPlaylists } = useApi(ENDPOINTS.playlists);
  const { data: albums, loading: loadingAlbums, error: errorAlbums } = useApi(ENDPOINTS.albums);
  const { data: artists, loading: loadingArtists, error: errorArtists } = useApi(ENDPOINTS.artists);
  const { data: genres, loading: loadingGenres, error: errorGenres } = useApi(ENDPOINTS.genres);

  if (loadingSongs || loadingPlaylists || loadingAlbums || loadingArtists || loadingGenres) {
    return <p>Loading...</p>;
  }

  if (errorSongs || errorPlaylists || errorAlbums || errorArtists || errorGenres) {
    return <p>Error fetching data.</p>;
  }

  return (
    <div>
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
