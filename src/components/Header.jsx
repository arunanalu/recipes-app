import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchHeader from './SearchHeader';

export default function Header() {
  const [display, setDisplay] = useState(false);
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  const UpperCase = path[0].toUpperCase() + path.substr(1);
  return (
    <header>
      <h1 data-testid="page-title">
        { UpperCase }
      </h1>
      <Link to="/perfil">
        <img data-testid="profile-top-btn" src={ profileIcon } alt="icone-perfil" />
      </Link>
      <div>
        <button
          type="button"
          onClick={ () => setDisplay(!display) }
        >
          <img data-testid="search-top-btn" src={ searchIcon } alt="icone-perfil" />
        </button>
        { display && <SearchHeader /> }
      </div>
    </header>
  );
}
