const getMoney = (money) => async dispatch => {
    dispatch({ type: 'GET_MONEY', payload: money })
}
const addToCart = (product) => async dispatch => {
    dispatch({ type: 'ADD_PRODUCTS_TO_CART', payload: product })
}
export { getMoney, addToCart }