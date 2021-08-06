import React from 'react';
import PropTypes from 'prop-types';

function SectionContainer({ children }) {
  return <div className="max-w-4xl mx-auto md:px-4">{children}</div>;
}

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionContainer;
