import React from 'react';
import PropTypes from 'prop-types';

import { container } from './Container.module.scss';

const Container = ({ children, className }) => (
    <div className={`${container} ${className}`}>
        {children}
    </div>
);

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.object,
        PropTypes.string,
    ]),
    className: PropTypes.string,
};

Container.defaultProps = {
    children: '',
    className: '',
};

export default Container;
