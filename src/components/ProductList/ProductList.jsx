import React from 'react';

import { Col } from '~/components/Grid';

import {
    wrapper,
    sectionTitle,
    productList,
    product,
} from './ProductList.module.scss';

const ProductList = () => (
    <Col className={wrapper}>
        <h2 className={sectionTitle}>Products</h2>
        <ul className={productList}>
            <li className={product} />
            <li className={product} />
            <li className={product} />
            <li className={product} />
            <li className={product} />
            <li className={product} />
        </ul>
    </Col>
);

export default ProductList;
