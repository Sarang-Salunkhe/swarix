import { Search, Bell, Settings } from 'lucide-react';
import './TopBar.css';

const TopBar = ({ setQuery }) => {
  return (
    <div className="topbar">
      <div className="search-container">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Search for songs, artists, or podcasts..."
          className="search-input"
          onChange={(e) => {
            console.log("Typing:", e.target.value);
            setQuery(e.target.value);
          }}
        />
      </div>

      <div className="user-controls">
        <button className="icon-btn">
          <Bell size={20} />
        </button>
        <button className="icon-btn">
          <Settings size={20} />
        </button>
        <div className="profile-avatar">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User Profile" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
