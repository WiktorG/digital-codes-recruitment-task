import React from 'react';
import { Provider } from 'react-redux';

import store from '~/redux/store';

import { Container, Row } from '~/components/Grid/';
import ProductList from '~/components/ProductList';
import Cart from '~/components/Cart';

const App = () => (
    <Provider store={store}>
        <Container>
            <Row>
                <ProductList />
                <Cart />
            </Row>
        </Container>
    </Provider>
);

export default App;
