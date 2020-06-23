import React from 'react';
import PropTypes from 'prop-types';

import {
    item,
    cover as styledCover,
} from './CartItem.module.scss';

const CartItem = ({
    cover,
    title,
    price,
    quantity,
    currency,
}) => (
    <li className={item}>
        <img src={cover} className={styledCover} />
        {title}
    </li>
);

CartItem.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
};

export default CartItem;
