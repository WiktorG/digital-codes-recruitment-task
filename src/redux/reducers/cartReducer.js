import {
    PRODUCT_ADD_TO_CART,
    PRODUCT_REMOVE_FROM_CART,
} from '~/redux/actions/cartActions';

const initialState = {
    items: [],
    currency: 'PLN',
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
    case PRODUCT_ADD_TO_CART:
        return {
            ...state,
            items: [...state.items, action.productId],
        };
    case PRODUCT_REMOVE_FROM_CART:
        return {
            ...state,
            items: [...state.items].filter((id) => id !== action.productId),
        };
    default:
        return state;
    }
};

export default cartReducer;
