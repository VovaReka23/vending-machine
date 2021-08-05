import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { BasketCard } from '../components'
const Basket = (props) => {
    return (
        <div className={'container m-30t'}>
            <Link className="back-home" to={`/`}>
                Back to home
            </Link>
            <div className={'basket__container m-30t'}>
                {props.basket.map((product) => (<BasketCard key={product.id} product={product} />))}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basket: state.product.basket
})
export default connect(mapStateToProps)(React.memo(Basket))