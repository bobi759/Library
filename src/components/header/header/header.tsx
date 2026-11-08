// src/components/Header.tsx
import { Outlet, Link } from 'react-router'
import "./Header.css"
import ProfilePicture from '../profilePicture/profilePicture'
import Notification from '../notification/notification'
import SearchBar from '../searchBar/searchBar'
import Logo from '../logo/logo'


export default function Header() {
  return (
    <>
    <header className="navbar-container">
        <div className="navbar-content">
          {/* Left: Brand Logo & Title */}
            <Logo/>

          {/* Center: Search Bar */}
          <form className="search-bar">
            {/* Search Magnifying Glass Icon */}

            <SearchBar/>
            
            
          </form>

          {/* Right: Notification Bell & Profile Avatar */}
          <div className="navbar-actions">
            
            <Notification/>

            <ProfilePicture/>
          </div>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      </>
  )
}