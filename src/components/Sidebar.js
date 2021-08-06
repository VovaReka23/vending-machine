import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Coin from './Coin'
import Button from './Button'
import Balance from './Balance'
import DisplayInfo from './DisplayInfo'
import * as CoinsActions from '../redux/actions/coins';
import * as ProductActions from '../redux/actions/product';
import styles from '../assets/scss/Sidebar.module.scss';
const Sidebar = (props) => {
    React.useEffect(() => {
        props.sendBalance(props.coins, props.money)
    }, [props.money])
    const getProductAndRest = () => {
        if (!props.money || props.balance.length === 0) {
            props.sendMessage('Please top up your balance')
        } else {
            props.getRest();
            props.getProduct();
            props.sendMessage('Thanks for your purchase!')
        }

    }
    const sendMoney = (event, coin) => {
        props.sendMoney(props.money + coin.value);
        props.changeCountCoin(coin.id);
        props.sendMessage('You have replenished your balance!')
    }
    return (
        <div className={styles.sidebar}>
            <Balance money={props.money} styles={styles} />
            <div className={styles.blockOfCoins}>
                {props.coins.map(coin => (
                    <Coin key={coin.id} coin={coin} onClick={(event) => sendMoney(event, coin)} />
                ))}
            </div>
            <Button onClick={getProductAndRest}>GET</Button>
            <DisplayInfo>
                <p className={styles.message}>{props.message}</p>
                {props.basket.length !== 0 &&
                    <>
                        <h3>Press GET to get products</h3>
                        {props.basket !== 0 && props.basket.map((product) => (
                            <div key={product.id} className={styles.productBlock}>
                                <span className={styles.name}>{product.name}</span>
                                <span> X {product.count}</span>
                            </div>
                        ))}
                    </>
                }
                {props.balance.length !== 0 &&
                    <span>
                        <h3>Press GET to get money!</h3>
                        {props.balance.map((coin) => (
                            <div key={coin.currency} className={styles.block}>
                                <span className={styles.coin}>{coin.currency}</span>
                                <span> X {coin.count}</span>
                            </div>
                        ))}

                    </span>
                }

            </DisplayInfo>

        </div>
    )
}

const mapStateToProps = state => ({
    coins: state.coins.coins,
    money: state.coins.money,
    balance: state.coins.balance,
    message: state.coins.message,
    basket: state.product.basket
})
const mapDispatchToProps = dispatch => bindActionCreators({
    ...CoinsActions,
    ...ProductActions
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Sidebar))