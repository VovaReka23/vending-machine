import React from 'react'
import PropTypes from 'prop-types';
import styles from '../assets/scss/AdminCard.module.scss';
const AdminCard = ({ product, changeCountProducts, reset }) => {
    const [value, setValue] = React.useState('');
    const onChangeProducts = (e, id, count) => {
        changeCountProducts(e, id, count)
        setValue(count)
    }
    React.useEffect(() => { setValue('') }, [reset])
    return (
        <div className={styles.adminCard}>
            <img className={styles.img} src={product.img} alt="product" />
            <div className={styles.count}>Count: <b>{product.count}</b></div>
            <div className={styles.name}>Name: <b>{product.name}</b></div>
            <div className={styles.price}>Price: <b>£{product.price}</b></div>
            <input value={value} onChange={(e) => onChangeProducts(e, product.id, e.target.value)} type="number" min={0} step={1} />
        </div>
    )
}
AdminCard.propTypes = {
    product: PropTypes.object,
};
export default AdminCard;