import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Mic2 } from 'lucide-react';
import { useState } from 'react';
import './Player.css';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="player-container">
      {/* Current Track Info */}
      <div className="track-info">
        <div className="track-thumbnail">
          <div className="img-placeholder">S</div>
        </div>
        <div className="track-details">
          <h4>Neon Nights</h4>
          <p>Cyberwave</p>
        </div>
      </div>

      {/* Main Controls */}
      <div className="player-controls">
        <div className="control-buttons">
          <button className="st-btn"><Shuffle size={18} /></button>
          <button className="st-btn"><SkipBack size={24} /></button>
          
          <button 
            className="play-btn"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause fill="currentColor" size={24} /> : <Play fill="currentColor" size={24} />}
          </button>
          
          <button className="st-btn"><SkipForward size={24} /></button>
          <button className="st-btn"><Repeat size={18} /></button>
        </div>
        
        <div className="progress-container">
          <span className="time">1:24</span>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill"></div>
            <div className="progress-thumb"></div>
          </div>
          <span className="time">3:42</span>
        </div>
      </div>

      {/* Extra Controls (Volume etc) */}
      <div className="extra-controls">
        <button className="st-btn"><Mic2 size={18} /></button>
        <div className="volume-container">
          <Volume2 size={18} className="vol-icon"/>
          <div className="volume-bar-bg">
             <div className="volume-bar-fill"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
