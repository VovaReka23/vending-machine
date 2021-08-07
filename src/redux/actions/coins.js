const sendMoney = (money) => dispatch => {
    dispatch({ type: 'SEND_MONEY', payload: money })
}
const sendBalance = (coins, amount) => dispatch => {
    const obj = {}
    coins.filter(coin => coin.stock > 0).reverse().map((coin) => {
        while (Number(amount.toFixed(2)) >= coin.value) {
            amount -= coin.value
            obj.hasOwnProperty(coin.label) ? obj[coin.label] += 1 : obj[coin.label] = 1
        }
    })
    const result = Object.keys(obj).map((key) => ({ currency: key, count: obj[key] }))
    dispatch({ type: 'SEND_BALANCE', payload: result })
}
const getRest = () => dispatch => {
    dispatch({ type: 'GET_REST' })
}
const changeCountCoin = (id) => dispatch => {
    dispatch({ type: 'CHANGE_COUNT_COIN', payload: id })
}

const sendMessage = (message) => async dispatch => {
    dispatch({ type: 'SEND_MESSAGE', payload: message })
}
const addCoins = (coins, forceUpdate) => ({
    type: 'ADD_COIN',
    payload: coins,
    forceUpdate: forceUpdate
});

export { sendMoney, changeCountCoin, sendMessage, sendBalance, getRest, addCoins }