import React from 'react';

import { Col } from '~/components/Grid';

import { wrapper, sectionTitle } from './Cart.module.scss';

const Cart = () => (
    <Col className={wrapper}>
        <h2 className={sectionTitle}>Cart</h2>
    </Col>
);

export default Cart;
