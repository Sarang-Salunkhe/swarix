import { Play } from 'lucide-react';
import './MusicGrid.css';
import { useEffect } from "react";
import axios from "axios";

const MOCK_DATA = [
  { id: 1, title: 'Neon Nights', artist: 'Cyberwave', img: '/cyberpunk.png' },
  { id: 2, title: 'Midnight City', artist: 'The Midnight', img: '/synthwave.png' },
  { id: 3, title: 'Lofi Study Beats', artist: 'Chillhop Music', img: '/chill.png' },
  { id: 4, title: 'Quantum Flux', artist: 'Exogenesis', img: '/cyberpunk.png' },
  { id: 5, title: 'Retrograde', artist: 'James Blake', img: '/synthwave.png' },
  { id: 6, title: 'Ocean Eyes', artist: 'Billie Eilish', img: '/chill.png' },
  { id: 7, title: 'Starboy', artist: 'The Weeknd', img: '/cyberpunk.png' },
  { id: 8, title: 'Nightcall', artist: 'Kavinsky', img: '/synthwave.png' },
];

const MusicGrid = ({ query, songs, setSongs }) => {
  useEffect(() => {
  if (query) {
    axios
      .get(`http://127.0.0.1:8000/api/search/?q=${query}`)
      .then((res) => {
        setSongs(res.data);
      })
      .catch((err) => console.error(err));
  }
}, [query, setSongs]);

  return (
    <div className="music-grid-wrapper">
      <h2 className="section-title">Recommended for you</h2>
      <div className="grid-container">
        {songs.map((item) => (
          <div key={item.videoId || item.id || item.title} className="music-card">
            <div className="card-image-wrapper">
              <img src={item.thumbnail} alt={item.title} className="card-image" />
              <button className="card-play-btn">
                <Play fill="currentColor" size={24} />
              </button>
            </div>
            <div className="card-info">
              <h4 className="card-title">{item.title}</h4>
              <p className="card-artist">Youtube</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="spacer"></div>
      
      <h2 className="section-title">Trending Now</h2>
      <div className="grid-container">
        {[...songs].reverse().map((item) => (
          <div key={`trend-${item.videoId || item.id || item.title}`} className="music-card">
            <div className="card-image-wrapper">
              <img src={item.thumbnail || item.img} alt={item.title} className="card-image" />
              <button className="card-play-btn">
                <Play fill="currentColor" size={24} />
            </button>
            </div>
            <div className="card-info">
              <h4 className="card-title">{item.title}</h4>
              <p className="card-artist">{item.artist}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* spacer to avoid being covered by player completely */}
      <div style={{ height: "40px" }}></div>
    </div>
  );
};

export default MusicGrid;
