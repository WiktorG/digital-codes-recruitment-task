import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllProducts } from '~/redux/actions/productsActions';
import { products as productsSelector } from '~/redux/selectors/productsSelectors';

import { Col } from '~/components/Grid';

import {
    wrapper,
    sectionTitle,
    productList,
    product,
    requestError,
} from './ProductList.module.scss';

const ProductList = () => {
    const dispatch = useDispatch();
    const { isPending, error, list } = useSelector(productsSelector);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <Col className={wrapper}>
            <h2 className={sectionTitle}>
                {!isPending ? 'Products' : 'Loading..'}
            </h2>
            {!isPending && !error ? (
                <ul className={productList}>
                    <li className={product} />
                    <li className={product} />
                    <li className={product} />
                    <li className={product} />
                    <li className={product} />
                    <li className={product} />
                </ul>
            ) : (
                <span className={requestError}>{error}</span>
            ) }
        </Col>
    );
};

export default ProductList;
