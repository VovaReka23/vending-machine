import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AdminCard, Button, AdminCoin } from '../components'
import * as ProductActions from '../redux/actions/product';
import * as CoinsActions from '../redux/actions/coins';

const Admin = (props) => {
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const [addedCoins, setAddedCoins] = React.useState({});
    const [addedProducts, setAddedProducts] = React.useState({});
    const changeCountMoney = (e, id, count) => {
        setAddedCoins((prev) => (
            {
                ...prev,
                [id]: count
            }
        ))
    }
    const changeCountProducts = (e, id, count) => {
        setAddedProducts((prev) => (
            {
                ...prev,
                [id]: count
            }
        ))
    }
    const addProduct = () => {
        props.addProducts(addedProducts, forceUpdate)
    }
    const addCoin = () => {
        props.addCoins(addedCoins, forceUpdate)
    }
    return (
        <div className={'main-content'}>
            <h2>Admin</h2>
            <div className={'product__container m-30t m-30b'}>
                <h3 className="m-10b">Products:</h3>
                {props.products.map((product) => (<AdminCard reset={props.reset} changeCountProducts={changeCountProducts} key={product.id} product={product} />))}
                <Button onClick={addProduct} >Add Product</Button>
            </div>
            <div className={'coins__container m-30t m-30b'}>
                <h3 className="m-10b">Coins:</h3>
                {props.coins.map((coin) => (<AdminCoin reset={props.resetCoin} changeCountMoney={changeCountMoney} key={coin.id} coin={coin} />))}
                <Button onClick={addCoin}>Add Coins</Button>
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    products: state.product.products,
    reset: state.product.reset,
    resetCoin: state.coins.reset,
    coins: state.coins.coins,
})
const mapDispatchToProps = dispatch => bindActionCreators({
    ...ProductActions,
    ...CoinsActions
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Admin))