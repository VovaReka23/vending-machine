import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/scss/Input.module.scss';
const Input = ({ lable }) => {
    return (
        <>
            <label className={styles.label} >{lable}</label>
            <input className={styles.input} type="number" />
        </>
    )
}
Input.propTypes = {
    lable: PropTypes.string,
};
export default Input