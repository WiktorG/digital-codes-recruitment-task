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
    const { list } = useSelector(productsSelector); // products in store
    const { items, currency } = useSelector(cartSelector); // ids from cart in store
    const productIds = Array.from(new Set(items)); // ids without duplicates in correct order

    const cartItemsInOrder = productIds.map((productId) => {
        const product = list.find(({ id }) => id === productId);
        return {
            id: product.id,
            cover: product.cover,
            title: product.title,
            price: product.price,
            currency: product.currency,
            quantity: items.filter((id) => id === product.id).length,
        };
    });

    const cartValue = cartItemsInOrder
        .reduce((prev, item) => prev + (item.price * item.quantity), 0)
        .toFixed(2);

    return (
        <Col className={wrapper}>
            <h2 className={sectionTitle}>
                Cart
                {cartItemsInOrder.length !== 0 ? ` - total: ${cartValue} ${currency}` : ' - empty'}
            </h2>
            <ul className={itemsList}>
                <CartItems items={cartItemsInOrder} />
            </ul>
        </Col>
    );
};

export default Cart;
