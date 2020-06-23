import {
    PRODUCT_ADD_TO_CART,
} from '~/redux/actions/cartActions';

const initialState = {
    items: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
    case PRODUCT_ADD_TO_CART:
        return {
            ...state,
            items: [...state.items, action.productId],
        };
    default:
        return state;
    }
};

export default cartReducer;
