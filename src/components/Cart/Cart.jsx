import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { products as productsSelector } from '~/redux/selectors/productsSelectors';
import { cart as cartSelector } from '~/redux/selectors/cartSelectors';

import { Col } from '~/components/Grid';
import CartItem from '~/components/CartItem';

import {
    wrapper,
    sectionTitle,
    itemsList,
} from './Cart.module.scss';

// eslint-disable-next-line react/jsx-props-no-spreading
const CartItems = ({ items }) => items.map((item) => <CartItem key={uuid()} {...item} />);

const Cart = () => {
    const { list } = useSelector(productsSelector); // products
    const { items } = useSelector(cartSelector); // ids from cart

    const cartItems = list.map((product) => ({
        id: product.id,
        cover: product.cover,
        title: product.title,
        price: product.price,
        currency: product.currency,
        quantity: items.filter((id) => id === product.id).length,
    })).filter((cartItem) => cartItem.quantity !== 0);

    return (
        <Col className={wrapper}>
            <h2 className={sectionTitle}>Cart</h2>
            <ul className={itemsList}>
                <CartItems items={cartItems} />
            </ul>
        </Col>
    );
};

export default Cart;
