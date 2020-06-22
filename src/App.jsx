import React from 'react';
import { Provider } from 'react-redux';

import store from '~/redux/store';

import Container from '~/components/Container';
import Row from '~/components/Row';

const App = () => (
    <Provider store={store}>
        <Container>
            <Row>
                123
            </Row>
        </Container>
    </Provider>
);

export default App;
