import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchHeader from './SearchHeader';

export default function Header() {
  const [display, setDisplay] = useState({ display: 'none' });
  return (
    <header>
      <h1 data-testid="page-title">Header</h1>
      <Link to="/perfil">
        <img data-testid="profile-top-btn" src={ profileIcon } alt="icone-perfil" />
      </Link>
      <div>
        <button
          type="button"
          onClick={ () => (display.display === 'none' ? setDisplay({})
            : setDisplay({ display: 'none' })) }
        >
          <img data-testid="search-top-btn" src={ searchIcon } alt="icone-perfil" />
        </button>
        {/* <input type="text" data-testid="search-input" style={ display } /> */}
        <SearchHeader display={ display } />
      </div>
    </header>
  );
}
