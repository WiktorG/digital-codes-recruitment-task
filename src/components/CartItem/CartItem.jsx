import React from 'react';
import PropTypes from 'prop-types';

import {
    item,
    cover as styledCover,
    info,
    title as styledTitle,
    property,
    propertyValue,
} from './CartItem.module.scss';

const CartItem = ({
    cover,
    title,
    price,
    quantity,
    currency,
}) => (
    <li className={item}>
        <img src={cover} alt={`${title} cover`} className={styledCover} />
        <div className={info}>
            <h4 className={styledTitle}>{title}</h4>
            <span className={property}>
                Quantity:
                <span className={propertyValue}>{quantity}</span>
            </span>
            <span className={property}>
                Price:
                <span className={propertyValue}>{`${price} ${currency}`}</span>
            </span>
        </div>
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
