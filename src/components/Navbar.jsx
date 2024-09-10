import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ searchQuery, handleSearchChange }) => {
  return (
    <div className="navbar-container">
      <div className="content">
        <p>
          <img src="src/assets/pokeball/5.svg" alt="Pokeball" />Welcome to Pokedex
        </p>
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search Pokémon..."
            className="search-bar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
