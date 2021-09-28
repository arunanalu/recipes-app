import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchHeader from './SearchHeader';

export default function Header() {
  const [display, setDisplay] = useState(false);
  const location = useLocation();

  function setHeaderName() {
    const path = location.pathname.split('/');
    let headerName = '';
    const capitalize = (letter) => (letter[0].toUpperCase() + letter.substr(1));
    path.forEach((name) => {
      if (name === 'ingredientes') headerName = 'Explorar Ingredientes';
      if (name === 'area') headerName = 'Explorar Origem';
    });
    if (!headerName) {
      const [, first, second] = path;
      let firstName = capitalize(first);
      const secondName = second && capitalize(second);
      if (firstName.includes('-')) {
        const splitName = firstName.split('-');
        splitName[1] = capitalize(splitName[1]);
        firstName = splitName.join(' ');
      }

      headerName = secondName ? `${firstName} ${secondName}` : firstName;
    }
    return headerName;
  }

  return (
    <header>
      <h1 data-testid="page-title">
        { setHeaderName() }
      </h1>
      <Link to="/perfil">
        <img data-testid="profile-top-btn" src={ profileIcon } alt="icone-perfil" />
      </Link>
      <div>
        {(location.pathname === '/comidas'
        || location.pathname === '/bebidas'
        || location.pathname === '/explorar/comidas/area')
          && (
            <button
              type="button"
            >
              <input
                tipe="image"
                onClick={ () => setDisplay(!display) }
                data-testid="search-top-btn"
                src={ searchIcon }
                alt="icone-perfil"
              />
              { display && <SearchHeader /> }
            </button>
          )}
      </div>
    </header>
  );
}
