import React from 'react'
import styles from '../assets/scss/DisplayInfo.module.scss';
const DisplayInfo = ({ children }) => {
    return (
        <div className={styles.display}>{children}</div>
    )
}
export default DisplayInfo;