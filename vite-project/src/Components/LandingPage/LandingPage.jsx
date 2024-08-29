import React, { useState } from 'react';
import './LandingPage.css';
import SearchBar from '../SearchBar/SearchBar';
import Btn from '../Button/Btn';
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
      <Btn/>

      <div className="info-text">
        <p>Price comparison helps you save 100s of pounds on online shopping. Start by searching for the product you want to buy and see what's the cheapest price available online.</p>
      </div>
    </div>
  );
}

export default LandingPage;
