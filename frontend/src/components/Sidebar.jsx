import { Home, Search, Library, Compass } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <h2>Swarix</h2>
        <div className="logo-dot"></div>
      </div>

      <nav className="nav-menu">
        <p className="nav-label">Menu</p>
        <ul className="nav-list">
          <li className="nav-item active">
            <Home size={20} />
            <span>Home</span>
          </li>
          <li className="nav-item">
            <Search size={20} />
            <span>Discover</span>
          </li>
          <li className="nav-item">
            <Compass size={20} />
            <span>Explore</span>
          </li>
          <li className="nav-item">
            <Library size={20} />
            <span>Your Library</span>
          </li>
        </ul>
      </nav>
      
      <div className="your-playlists">
        <p className="nav-label">Playlists</p>
        <ul className="nav-list">
          <li className="nav-item"><span>Cyberpunk Vibes</span></li>
          <li className="nav-item"><span>Synthwave Essentials</span></li>
          <li className="nav-item"><span>Chill Beats</span></li>
          <li className="nav-item"><span>Top 50 Global</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
