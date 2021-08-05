import React from 'react'
import { connect } from 'react-redux';
import { Card, Button, Popup, Checkout } from '../components'

const Home = (props) => {
    const [visible, setVisible] = React.useState(false);
    const closePopup = () => {
        setVisible(false);
    };
    const openPopup = () => {
        setVisible(true);
    };
    return (
        <div className={'container m-30t'}>
            <Button onClick={openPopup}>Get products</Button>
            {visible &&
                <Popup onClick={closePopup}><Checkout coins={props.coins} basket={props.basket} money={props.money} /></Popup>
            }
            <div className={'card__container m-30t'}>
                {props.products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    products: state.product.products,
    basket: state.product.basket,
    money: state.product.money,
    coins: state.product.coins,
})
export default connect(mapStateToProps)(React.memo(Home))