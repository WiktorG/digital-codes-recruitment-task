export const PRODUCT_ADD_TO_CART = 'PRODUCT_ADD_TO_CART';
export const PRODUCT_REMOVE_FROM_CART = 'PRODUCT_REMOVE_FROM_CART';

export const productAddToCart = (productId) => ({ type: PRODUCT_ADD_TO_CART, productId });
export const productRemoveFromCart = (productId) => ({ type: PRODUCT_REMOVE_FROM_CART, productId });
