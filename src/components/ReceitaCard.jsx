import React from 'react';
import PropTypes from 'prop-types';

export default function ReceitaCard({ thumb, index, name }) {
  return (
    <div
      data-testid={ `${index}-recipe-card` }
      className="principalCard"
    >
      <div className="imgContainer">
        <img
          data-testid={ `${index}-card-img` }
          // width={ 100 }
          src={ thumb }
          alt={ name }
        />
      </div>
      <div className="textContainer">
        <p data-testid={ `${index}-card-name` }>{name}</p>
      </div>
    </div>
  );
}

ReceitaCard.propTypes = {
  thumb: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
