const addToCart = (product, forceUpdate) => ({
    type: 'ADD_PRODUCTS_TO_CART',
    payload: product,
    forceUpdate: forceUpdate
});
const addProducts = (product, forceUpdate) => ({
    type: 'ADD_PRODUCTS',
    payload: product,
    forceUpdate: forceUpdate
});
const getProduct = () => dispatch => {
    dispatch({ type: 'GET_PRODUCT' })
}
const decrementCountProduct = (id) => ({
    type: 'DECRENENT_COUNT_PRODUCT',
    payload: id
})
const incrementCountProduct = (id, count) => ({
    type: 'INCRENENT_COUNT_PRODUCT',
    payload: { id, count }
})

const removeProduct = (id) => ({
    type: 'REMOVE_PRODUCT',
    payload: id,
});
export { addToCart, decrementCountProduct, removeProduct, incrementCountProduct, getProduct, addProducts }