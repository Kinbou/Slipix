import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './loader.scss';

const Loader = ({ withMargin }) => {
  const spinnerClass = classNames('spinner', { 'spinner--margin': withMargin });

  return (
    <div className={spinnerClass}>
      <div className="bounce1"> </div>
      <div className="bounce2"> </div>
      <div className="bounce3"> </div>
    </div>
  );
};

Loader.propTypes = {
  withMargin: PropTypes.bool,
};

Loader.defaultProps = {
  withMargin: true,
};

export default Loader;
