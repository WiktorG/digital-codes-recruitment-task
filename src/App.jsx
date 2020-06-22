import React from 'react';
import { Provider } from 'react-redux';

import store from '~/redux/store';

import Container from '~/components/Container';
import Row from '~/components/Row';
import ProductList from '~/components/ProductList';

const App = () => (
    <Provider store={store}>
        <Container>
            <Row>
                <ProductList />
            </Row>
        </Container>
    </Provider>
);

export default App;
