import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Profile() {
  const history = useHistory();
  const emailStorage = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <Header />
      <p data-testid="profile-email">{emailStorage && emailStorage.email}</p>
      <button
        onClick={ () => history.push('/receitas-feitas') }
        type="button"
        data-testid="profile-done-btn"
      >
        Receitas Feitas
      </button>
      <button
        onClick={ () => history.push('/receitas-favoritas') }
        type="button"
        data-testid="profile-favorite-btn"
      >
        Receitas Favoritas
      </button>
      <button
        onClick={ () => {
          localStorage.clear();
          history.push('/');
        } }
        type="button"
        data-testid="profile-logout-btn"
      >
        Sair
      </button>
      <Footer />
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
