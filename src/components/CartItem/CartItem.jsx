import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { productRemoveFromCart } from '~/redux/actions/cartActions';

import {
    item,
    cover as styledCover,
    info,
    title as styledTitle,
    property,
    propertyValue,
    removeButton,
} from './CartItem.module.scss';

const CartItem = ({
    id,
    cover,
    title,
    price,
    quantity,
    currency,
}) => {
    const dispatch = useDispatch();

    const handleProductRemove = (e) => {
        e.preventDefault();
        dispatch(productRemoveFromCart(id));
    };

    return (
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
            <button
                className={removeButton}
                type="button"
                onClick={handleProductRemove}
            >
                Remove
            </button>
        </li>
    );
};

CartItem.propTypes = {
    id: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
};

export default CartItem;
