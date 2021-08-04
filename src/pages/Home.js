import React from 'react'
import { connect } from 'react-redux';
import { Card } from '../components'

const Home = (props) => {
    return (
        <div className={'container'}>
            <div className={'card__container'}>
                {props.products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    products: state.product.products
})
export default connect(mapStateToProps)(React.memo(Home))