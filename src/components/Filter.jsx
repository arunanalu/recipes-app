import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import useCategoryApi from '../hooks/useCategoryApi';
import myContext from '../context/mycontext';

export default function Filter({ url, type }) {
  const [category, loading] = useCategoryApi(url);
  const [btn, setBtn] = useState('');
  const { setFilter } = useContext(myContext);
  const QUATRO = 4;
  let result = [];
  if (loading === true) result = category[type];

  const applyFilter = (event, categoria) => {
    if (event.target === btn) {
      setFilter('');
      setBtn('');
    } else {
      setFilter(categoria);
      setBtn(event.target);
    }
  };

  return (
    <div>
      {result.map(
        (element, index) => index <= QUATRO && (
          <button
            type="button"
            key={ index }
            data-testid={ `${element.strCategory}-category-filter` }
            onClick={ (event) => applyFilter(event, element.strCategory) }
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
