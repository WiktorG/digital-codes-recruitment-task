import React from 'react';
import { Provider } from 'react-redux';

import store from '~/redux/store';

const App = () => (
    <Provider store={store}>
        <IconContext.Provider value={{ className: 'react-icons' }}>
            <Nav />
            <ShipsList />
            <Footer />
            <GlobalStyles />
        </IconContext.Provider>
    </Provider>
);

export default App;
