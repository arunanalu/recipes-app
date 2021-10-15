import PropTypes from 'prop-types';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteCard({ recipe, index }) {
  const {
    image,
    id,
    name,
    alcoholicOrNot,
    area,
    category,
    // tags,
    // doneDate,
    type } = recipe;
  const history = useHistory();

  // console.log('aqui os dados que devem ser recebidos');
  // console.log(recipe);

  function copyToClipboard() {
    const notify = () => toast('Link copiado!');
    const linkShare = `http://localhost:3000/comidas/${id}`;
    navigator.clipboard.writeText(linkShare);
    notify();
  }

  function handleClick(recipeId) {
    const recipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const filteredRecipes = recipes.filter((item) => item.id !== recipeId);
    localStorage.setItem('favoriteRecipes', JSON.stringify(filteredRecipes));
    window.location.reload(false);
  }

  return (
    <div className="favorite-card">
      <input
        type="image"
        width="100px"
        alt=""
        data-testid={ `${index}-horizontal-image` }
        src={ image }
        className="favorite-img"
        onClick={ () => history.push(`/${type}s/${id}`) }
      />
      <p data-testid={ `${index}-horizontal-top-text` }>
        { !alcoholicOrNot ? `${area} - ${category}` : alcoholicOrNot }
      </p>
      <Link className="fav-link" to={ `/${type}s/${id}` }>
        <p data-testid={ `${index}-horizontal-name` }>{ name }</p>
      </Link>
      {/* {history.location.pathname === '/receitas-feitas'
      && (
        <>
          {tags.length > 0 && tags.map((tag) => (
            <span key={ tag } data-testid={ `${index}-${tag}-horizontal-tag` }>
              {`${tag} `}
            </span>))}
          <br />
          <p data-testid={ `${index}-horizontal-done-date` }>{`Feita em ${doneDate}`}</p>
        </>
      )} */}
      <div className="btn-container2">
        <input
          alt="Ícone de compartilhamento"
          data-testid={ `${index}-horizontal-share-btn` }
          type="image"
          src={ shareIcon }
          onClick={ copyToClipboard }
          className="copy-btn2"
        />
        <ToastContainer />
        { history.location.pathname === '/receitas-favoritas'
        && (
          <button
            type="button"
            onClick={ () => handleClick(id) }
            className="favorite-btn2"
          >
            <img
              src={ blackHeartIcon }
              className="favorite-btn2"
              alt="favorite"
              data-testid={ `${index}-horizontal-favorite-btn` }
            />
          </button>)}
      </div>
    </div>
  );
}

FavoriteCard.propTypes = {
  index: PropTypes.number,
  recipe: PropTypes.shape({
    alcoholicOrNot: PropTypes.string,
    area: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
  }),
}.isRequired;

export default FavoriteCard;
