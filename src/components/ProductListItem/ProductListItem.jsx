import React from 'react';
import PropTypes from 'prop-types';

import {
    product as productStyled,
    cover as styledCover,
    info,
    title as styledTitle,
    price as styledPrice,
    availability as styledAvaliability,
} from './ProductListItem.module.scss';

const ProductListItem = ({
    title,
    cover,
    availability,
    price,
    currency,
}) => (
    <li className={productStyled}>
        <img
            src={cover}
            alt="product"
            className={styledCover}
        />
        <div className={info}>
            <h4 className={styledTitle}>{title}</h4>
            {price !== null && (<span className={styledPrice}>{`${price} ${currency}`}</span>)}
            {!availability && <span className={styledAvaliability}>Currently unavaliable</span>}
        </div>
    </li>
);

ProductListItem.propTypes = {
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
