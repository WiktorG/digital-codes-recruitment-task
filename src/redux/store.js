/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '~/redux/reducers/rootReducer';

// I leave it so that you can check it in your browser on production :)
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose;

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        devTools,
    ),
);


export default store;
