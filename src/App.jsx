import React from 'react';
import { Provider } from 'react-redux';

import store from '~/redux/store';

import Container from '~/components/Container';

const App = () => (
    <Provider store={store}>
        <Container>Hello world</Container>
    </Provider>
);

export default App;
