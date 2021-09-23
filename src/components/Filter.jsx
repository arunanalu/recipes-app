import React from 'react';
import PropTypes from 'prop-types';
import useCategoryApi from '../hooks/useCategoryApi';

export default function Filter({ url, type }) {
  const [category, loading] = useCategoryApi(url);
  const QUATRO = 4;
  let result = [];
  if (loading === true) result = category[type];
  return (
    <div>
      {result.map(
        (element, index) => index <= QUATRO && (
          <button
            type="button"
            key={ index }
          >
            {element.strCategory}
          </button>),
      )}
    </div>
  );
}

Filter.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
