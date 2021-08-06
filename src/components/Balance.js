import React from 'react'
import PropTypes from 'prop-types'

const Balance = ({ money, styles }) => (
    <div className={styles.balance}>
        {money <= 0 ? 'Insert Coin...' : '£' + money.toFixed(2)}
    </div>
)

Balance.propTypes = {
    money: PropTypes.number.isRequired
}

export default Balance