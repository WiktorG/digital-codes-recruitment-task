import products from '~/data/items.json';

/*
    I know this isn't real request but I make it look like it
    so in case it changes it would only change in one place
*/
export const ALL_PRODUCTS_REQUEST = 'ALL_PRODUCTS_REQUEST';
export const ALL_PRODUCTS_SUCCESS = 'ALL_PRODUCTS_SUCCESS';
export const ALL_PRODUCTS_ERROR = 'ALL_PRODUCTS_ERROR';

export const getAllProducts = () => async (dispatch) => {
    dispatch({ type: ALL_PRODUCTS_REQUEST });
    try {
        dispatch({ type: ALL_PRODUCTS_SUCCESS, products });
    } catch (err) {
        dispatch({ type: ALL_PRODUCTS_ERROR, error: 'Something went wrong :(' });
    }
};
