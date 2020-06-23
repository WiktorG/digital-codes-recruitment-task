import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { productAddToCart } from '~/redux/actions/cartActions';

import {
    product as productStyled,
    cover as styledCover,
    info,
    title as styledTitle,
    price as styledPrice,
    availability as styledAvaliability,
} from './ProductListItem.module.scss';

const ProductListItem = ({
    id,
    title,
    cover,
    availability,
    price,
    currency,
}) => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(productAddToCart(id));
    };

    return (
        <li className={productStyled}>
            <img
                src={cover}
                alt="product"
                className={styledCover}
            />
            <div className={info}>
                <h4 className={styledTitle}>{title}</h4>
                {price !== null && (<span className={styledPrice}>{`${price} ${currency}`}</span>)}
                {availability ? (
                    <button onClick={handleClick} type="button">
                        Add to cart
                    </button>
                ) : (
                    <span className={styledAvaliability}>
                        Currently unavaliable
                    </span>
                )}
            </div>
        </li>
    );
};

ProductListItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    availability: PropTypes.bool.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string.isRequired,
};

ProductListItem.defaultProps = {
    price: null,
};

export default ProductListItem;
