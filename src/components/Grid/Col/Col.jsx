import React from 'react';
import PropTypes from 'prop-types';

import { col } from './Col.module.scss';

const Col = ({ children, className }) => (
    <div className={`${col} ${className}`}>
        {children}
    </div>
);

Col.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.object,
        PropTypes.string,
    ]),
    className: PropTypes.string,
};

Col.defaultProps = {
    children: '',
    className: '',
};

export default Col;
