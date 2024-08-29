import React, { useState } from 'react';
import './LandingPage.css';
import SearchBar from '../SearchBar/SearchBar';

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="landing-page">
      <nav className="navbar">
        <img src="./images/Logo.png" alt="Logo" className="logo" />
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`nav-links ${menuOpen ? 'menu-active' : ''}`}>
          <a href="">Categories</a>
          <a href="">Brands</a>
          <a href="">Contact Us</a>
          <a href="" className="sell-btn">Sell With Us</a>
        </div>
      </nav>
    
      <div className="main-content">
        <h1 className="main-heading">Compare prices for over</h1>
        <h1 className="main-heading">5 million products sold online</h1>
      </div>

      <div className="search-container">
        <SearchBar />
      </div>
    </div>
  );
}

export default LandingPage;
