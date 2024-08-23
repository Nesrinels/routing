import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Home";
import Songs from "./Songs";
import Nave2 from './Nave2';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './Error';
import Stats from "./Stats";
import BookStats from "./BookStats";
import DashChoice from './DashChoice';


// Mock data
const songs = [
  { id: 1, title: "The Smallest Man Who Ever Lived", artist: "Taylor Swift ", album: "THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY" },
  { id: 2, title: "emails i can't send", artist: "Sabrina Carpenter", album: "emails i can’t send fwd" },
  { id: 3, title: "Reckless", artist: "Madison Beer", album: "Reckless" },
  { id: 4, title: "we can't be friends", artist: "Ariana Grande", album: "eternal sunshine" },
];


const SongDetail = () => {
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

const App = () => {
  return (
    <Router>
    <Nave2/>
             <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashChoice />} />
            <Route path="stats" element={<Stats />} />
            <Route path="bookstats" element={<BookStats />} />
          </Route>
          <Route path="/songs" element={<Songs />} />
          <Route path="/song/:id" element={<SongDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
     
    </Router>
  );
};

export default App;