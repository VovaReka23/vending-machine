import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductActions from '../redux/actions/product';
import * as CoinsActions from '../redux/actions/coins';
import { Link } from "react-router-dom";
import { Checkout } from '../components'
const Basket = (props) => {
    return (
        <div className={'main-content'}>
            <Link className="back-home" to={`/`}>
                Back to home
            </Link>
            <div className={'basket__container m-30t'}>
                {props.basket.length !== 0 ? <Checkout money={props.money} sendMoney={props.sendMoney} increment={props.incrementCountProduct} message={props.sendMessage} remove={props.removeProduct} basket={props.basket} /> :
                    <p className="back-empty">Basket is empty</p>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basket: state.product.basket,
    money: state.coins.money,
})
const mapDispatchToProps = dispatch => bindActionCreators({
    ...ProductActions,
    ...CoinsActions
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Basket))