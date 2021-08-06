import React from 'react'
import styles from '../assets/scss/Coin.module.scss';
const Coin = ({ coin, onClick }) => (
    <div className={styles.coin} onClick={onClick}>{coin.label}</div>
)

export default Coin