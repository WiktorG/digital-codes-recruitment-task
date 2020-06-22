import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_ERROR,
} from '~/redux/actions/productsActions';


const initialState = {
    isPending: true,
    error: false,
    list: [],
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
    case ALL_PRODUCTS_REQUEST:
        return {
            ...state,
            isPending: true,
            error: false,
        };
    case ALL_PRODUCTS_SUCCESS:
        return {
            ...state,
            isPending: false,
            error: false,
            list: [...action.products],
        };
    case ALL_PRODUCTS_ERROR:
        return {
            ...state,
            isPending: false,
            error: action.error,
            list: [],
        };
    default:
        return state;
    }
};

export default productsReducer;
