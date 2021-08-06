import React from 'react'
import styles from '../assets/scss/Checkout.module.scss';
const Checkout = ({ basket, remove, increment, money, sendMoney, message }) => {
    const handlerRemove = (event, id, count = 1, price) => {
        remove(id)
        message('You remove product!')
        increment(id, count)
        sendMoney(money + count * price)
    }
    return (
        <div className={styles.checkout}>
            <h3>Checkout: </h3>
            <div className={styles.products}>
                <ul>
                    {basket.map((product) => (
                        <li key={product.id} className={styles.product}>
                            <button onClick={(event) => handlerRemove(event, product.id, product.count, product.price)} className={styles.close}>X</button>
                            <img src={product.img} alt="product" />
                            <span className={styles.count}>{product.count}</span>
                            <div className={styles.name}>{product.name}</div>
                            <div className={styles.price}>Price: £{product.price}</div>
                        </li>
                    ))}

                </ul>
            </div>
        </div >
    )
}

export default Checkout