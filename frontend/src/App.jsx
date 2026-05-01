import './App.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import MusicGrid from './components/MusicGrid';
import Player from './components/Player';
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);

  return (
    <div className="app-container">
      <div className="sidebar-area">
        <Sidebar />
      </div>

      <div className="main-area">
        <TopBar setQuery={setQuery} />   {/* 👈 pass setQuery */}

        <div className="main-content">
          <MusicGrid 
            query={query} 
            songs={songs} 
            setSongs={setSongs} 
          />   {/* 👈 pass props */}
        </div>
      </div>

      <div className="player-area">
        <Player />
      </div>
    </div>
  );
}

export default App;