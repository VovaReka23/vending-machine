import React from 'react'
import styles from '../assets/scss/Checkout.module.scss';
const Checkout = ({ basket, money, coins }) => {

    console.log(money, coins);
    return (
        <div className={styles.checkout}>
            <h3>Checkout: </h3>
            <div className={styles.products}>
                <ul>
                    {basket.map((product) => (
                        <li key={product.id} className={styles.product}>
                            <button className={styles.close}>X</button>
                            <img src={product.img} alt="product" />
                            <span className={styles.count}>{product.count}</span>
                            <div className={styles.name}>{product.name}</div>
                            <div className={styles.price}>Price: £{product.price}</div>
                        </li>
                    ))}

                </ul>
            </div>
            <div className={styles.info}>
                <h4>Your rest of the money:</h4>
                <span><b>Money: </b>{money}</span>
            </div>
        </div>
    )
}

export default Checkout