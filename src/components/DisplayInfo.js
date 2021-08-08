import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/scss/DisplayInfo.module.scss';
const DisplayInfo = ({ children }) => {
    return (
        <div className={styles.display}>{children}</div>
    )
}
DisplayInfo.propTypes = {
    children: PropTypes.array
};
export default DisplayInfo;