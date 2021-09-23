import PropTypes from 'prop-types';
import React, { useState } from 'react';
import myContext from './mycontext';

export default function MyProvider({ children }, usert = '') {
  const [user, setUser] = useState(usert);
  const [data, setData] = useState([]);
  const [resultSearch, setResultSearch] = useState({});
  const contextValue = { user, setUser };
  return (
    <myContext.Provider
      value={ { contextValue, setData, resultSearch, setResultSearch, data } }
    >
      {children}
    </myContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
