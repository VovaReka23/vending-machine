import React from 'react'
import PropTypes from 'prop-types';
import styles from '../assets/scss/BasketCard.module.scss';
const BasketCard = ({ product }) => {
    return (
        <div className={styles.basketCard}>
            <img className={styles.img} src={product.img} alt="product" />
            <div className={styles.count}>Count: <b>{product.count}</b></div>
            <div className={styles.name}>Name: <b>{product.name}</b></div>
            <div className={styles.price}>Price: <b>£{product.price}</b></div>
        </div>
    )
}
BasketCard.propTypes = {
    product: PropTypes.object,
};
export default BasketCard;