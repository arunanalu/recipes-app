import PropTypes from 'prop-types';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteCard({ recipe, index }) {
  const { image, id, name, alcoholicOrNot, area, category, type } = recipe;
  const history = useHistory();

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
    console.log(filteredRecipes);
    window.location.reload(false);
  }

  return (
    <div>
      <input
        type="image"
        width="100px"
        alt=""
        data-testid={ `${index}-horizontal-image` }
        src={ image }
        onClick={ () => history.push(`/${type}s/${id}`) }
      />
      <p data-testid={ `${index}-horizontal-top-text` }>
        { !alcoholicOrNot ? `${area} - ${category}` : alcoholicOrNot }
      </p>
      <Link to={ `/${type}s/${id}` }>
        <p data-testid={ `${index}-horizontal-name` }>{ name }</p>
      </Link>
      <input
        alt="Ícone de compartilhamento"
        data-testid={ `${index}-horizontal-share-btn` }
        type="image"
        src={ shareIcon }
        onClick={ copyToClipboard }
      />
      <ToastContainer />
      <button
        type="button"
        onClick={ () => handleClick(id) }
      >
        <img
          src={ blackHeartIcon }
          alt="favorite"
          data-testid={ `${index}-horizontal-favorite-btn` }
        />
      </button>
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
