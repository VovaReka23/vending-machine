import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductActions from '../redux/actions/product';
import * as CoinsActions from '../redux/actions/coins';
import { Card } from '../components'

const Home = (props) => {
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const addToCard = (event, product) => {
        if (props.money < product.price) {
            props.sendMessage("You haven't enought money")

        } else {
            props.decrementCountProduct(product.id);
            props.sendMoney(props.money - product.price);
            props.addToCart(product, forceUpdate);
            props.sendMessage('Thank you for your order!')
        }

    }

    return (
        <div className={'main-content'}>
            <div className={'card__container'}>
                {props.products.map((product) => (
                    <Card onClick={addToCard} key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    products: state.product.products,
    basket: state.product.basket,
    money: state.coins.money,
    coins: state.coins.coins
})
const mapDispatchToProps = dispatch => bindActionCreators({
    ...ProductActions,
    ...CoinsActions
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Home))