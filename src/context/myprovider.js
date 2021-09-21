import PropTypes from 'prop-types';
import React, { useState } from 'react';
import myContext from './mycontext';

export default function MyProvider({ children }) {
  const [user, setUser] = useState('');
  const contextValue = { user, setUser };
  return (
    <myContext.Provider value={ { contextValue } }>
      {children}
    </myContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
