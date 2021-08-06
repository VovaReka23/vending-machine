import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/scss/Card.module.scss';
import cn from 'classnames';
const Card = ({ product, onClick }) => {
    return (
        <div onClick={(event) => onClick(event, product)} className={cn(styles.card, {
            [styles.dibable]: !product.count,
        })}>
            {product.count ?
                <div className={styles.count}>Available items: {product.count}</div> :
                <div className={styles.outOfStock}>Out of stock</div>
            }

            <img className="img-responsive center-block img-max-150" src={product.img} alt="product" />
            <div className={styles.name}>{product.name}</div>
            <div className={styles.price}>Price: £{product.price}</div>
        </div>
    )
}
Card.propTypes = {
    product: PropTypes.object,
};
export default Card