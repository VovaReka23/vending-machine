import React from 'react'
import styles from '../assets/scss/Popup.module.scss';
const Popup = ({ children, onClick }) => {
    return (
        <div className={styles.popup}>
            <div className={styles.container}>
                <button onClick={onClick} className={styles.close}>X</button>
                {children}
            </div>
        </div>
    )
}
export default Popup