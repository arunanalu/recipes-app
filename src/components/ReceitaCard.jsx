import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

export default function ReceitaCard({ thumb, index, name, page, id }) {
  const history = useHistory();

  const press = () => 0;
  return (
    <div
      data-testid={ `${index}-recipe-card` }
      onClick={ () => history.push(`/${page}/${id}`) }
      onKeyPress={ press() }
      role="button"
      tabIndex={ 0 }
    >
      <img
        data-testid={ `${index}-card-img` }
        width={ 50 }
        src={ thumb }
        alt={ name }
      />
      <p data-testid={ `${index}-card-name` }>{name}</p>
    </div>
  );
}

ReceitaCard.propTypes = {
  thumb: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
