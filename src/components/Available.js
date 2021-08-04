import React from 'react'
import PropTypes from 'prop-types';
import pound from '../assets/img/pound.jpg';
import styles from '../assets/scss/Available.module.scss';
const Available = ({ money }) => {
    return (
        <div className={styles.available}>
            <img src={pound} alt="logo" />
            <span>{money}</span>
        </div>
    )
}
Available.propTypes = {
    money: PropTypes.number,
};
export default Available;