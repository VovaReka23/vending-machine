import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/scss/Coin.module.scss';
const Coin = ({ coin, onClick }) => (
    <div className={styles.coin} onClick={onClick}>{coin.label}</div>
)
Coin.propTypes = {
    coin: PropTypes.object,
    onClick: PropTypes.func,
};
export default Coin