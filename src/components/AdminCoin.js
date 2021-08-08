import React from 'react'
import PropTypes from 'prop-types';
import styles from '../assets/scss/AdminCoins.module.scss';
const AdminCoin = ({ coin, changeCountMoney, reset }) => {
    const [value, setValue] = React.useState('');
    const onChangeCoins = (e, id, count) => {
        changeCountMoney(e, id, count)
        setValue(count)
    }
    React.useEffect(() => { setValue('') }, [reset])
    return (
        <div className={styles.adminCoins}>
            <span className={styles.coin}>{coin.label}</span>
            <div className={styles.stock}>Stock: <b>{coin.stock}</b></div>
            <input value={value} onChange={(e) => onChangeCoins(e, coin.id, e.target.value)} type="number" min={0} step={1} />
        </div>
    )
}
AdminCoin.propTypes = {
    product: PropTypes.object,
    changeCountMoney: PropTypes.func,
    reset: PropTypes.number,
};
export default AdminCoin;