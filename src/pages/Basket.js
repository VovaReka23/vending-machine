import React from 'react'
import { connect } from 'react-redux';
import { BasketCard } from '../components'
const Basket = (props) => {
    return (
        <div className={'container'}>
            <div className={'basket__container'}>
                {props.basket.map((product) => (<BasketCard key={product.id} product={product} />))}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basket: state.product.basket
})
export default connect(mapStateToProps)(React.memo(Basket))