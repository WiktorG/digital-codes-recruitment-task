import React from 'react';
import PropTypes from 'prop-types';

import { row } from './Row.module.scss';

const Row = ({ children, className }) => (
    <div className={`${row} ${className}`}>
        {children}
    </div>
);

Row.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.object,
        PropTypes.string,
    ]),
    className: PropTypes.string,
};

Row.defaultProps = {
    children: '',
    className: '',
};

export default Row;
