import React from 'react';

import { Col } from '~/components/Grid';

import {
    wrapper,
    sectionTitle,
} from './ProductList.module.scss';

const ProductList = () => (
    <Col className={wrapper}>
        <h2 className={sectionTitle}>Products</h2>
    </Col>
);

export default ProductList;
