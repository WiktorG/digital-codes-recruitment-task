import React from 'react';
import { useSelector } from 'react-redux';

import { products as productsSelector } from '~/redux/selectors/productsSelectors';
import { cart as cartSelector } from '~/redux/selectors/cartSelectors';

import { Col } from '~/components/Grid';

import { wrapper, sectionTitle } from './Cart.module.scss';

const Cart = () => {
    const { list } = useSelector(productsSelector); // products
    const { items } = useSelector(cartSelector); // ids from cart

    const cartItems = list.map((product) => ({
        id: product.id,
        cover: product.cover,
        name: product.name,
        price: product.price,
        curency: product.currency,
        quantity: items.filter((id) => id === product.id).length,
    })).filter((cartItem) => cartItem.quantity !== 0);

    console.log(cartItems);

    return (
        <Col className={wrapper}>
            <h2 className={sectionTitle}>Cart</h2>
        </Col>
    );
};

export default Cart;
