import React from 'react';
import PropTypes from 'prop-types';

function SectionContainer({ children }) {
  return <div className="md:container md:mx-auto ">{children}</div>;
}

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionContainer;
