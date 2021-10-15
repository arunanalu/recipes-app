import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/profile.css';

export default function Profile() {
  const history = useHistory();
  const emailStorage = JSON.parse(localStorage.getItem('user'));
  function resetLocal() {
    localStorage.setItem('doneRecipes', '[]');
  }
  return (
    <div>
      <Header />
      <div className="profile">
        <div className="profile-email">
          <p
            data-testid="profile-email"
          >
            {`Email: ${emailStorage && emailStorage.email}`}
          </p>
        </div>
        <div className="profile-btns">
          <button
            onClick={ () => history.push('/receitas-feitas') }
            type="button"
            data-testid="profile-done-btn"
          >
            Receitas Feitas
          </button>
          <button type="button" onClick={ resetLocal }>
            Resetar receitas feitas
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
