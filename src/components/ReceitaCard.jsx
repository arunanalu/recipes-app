import React from 'react';
import PropTypes from 'prop-types';

export default function ReceitaCard({ thumb, index, name }) {
  return (
    <div
      data-testid={ `${index}-recipe-card` }
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
};
