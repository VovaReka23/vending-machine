import React from 'react'
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from '../assets/scss/Button.module.scss';
const Button = ({ onClick, children, className }) => {
    return (
        <button
            onClick={onClick}
            className={cn(styles.button, className)}>
            {children}
        </button>
    )
}
Button.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
};
export default Button;
