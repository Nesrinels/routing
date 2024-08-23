import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Songs() {
    const songs = [
        { id: 1, title: "The Smallest Man Who Ever Lived", artist: "Taylor Swift ", album: "THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY" },
        { id: 2, title: "emails i can't send", artist: "Sabrina Carpenter", album: "emails i can’t send fwd" },
        { id: 3, title: "Reckless", artist: "Madison Beer", album: "Reckless" },
        { id: 4, title: "we can't be friends", artist: "Ariana Grande", album: "eternal sunshine" },
      ];
  let aboutStyle = {
    display: "flex",
    flexDirection: "column",
  };
  return (
       <div>
    <h2>Song List</h2>
    <ul>
      {songs.map(song => (
        <li key={song.id}>
          <Link to={`/song/${song.id}`}>{song.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

}
const SongDetail = () => {
    const songs = [
        { id: 1, title: "The Smallest Man Who Ever Lived", artist: "Taylor Swift ", album: "THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY" },
        { id: 2, title: "emails i can't send", artist: "Sabrina Carpenter", album: "emails i can’t send fwd" },
        { id: 3, title: "Reckless", artist: "Madison Beer", album: "Reckless" },
        { id: 4, title: "we can't be friends", artist: "Ariana Grande", album: "eternal sunshine" },
      ];
    const songId = parseInt(window.location.pathname.split('/')[2]);
    const song = songs.find(s => s.id === songId);
  
    return (
      <div>
        <h2>{song.title}</h2>
        <p>Artist: {song.artist}</p>
        <p>Album: {song.album}</p>
        <Link to="/songs">Back to list</Link>
      </div>
    );
  };

export default Songs;