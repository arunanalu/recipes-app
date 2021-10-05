import React from 'react';
import PropTypes from 'prop-types';

export default function Separator({ separator }) {
  return (
    <div
      className="separator-2"
      style={ separator ? { marginBottom: '162px' } : { marginBottom: '60px' } }
    />
  );
}

Separator.propTypes = {
  separator: PropTypes.bool.isRequired,
};
