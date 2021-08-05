import React from 'react'
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
export default Button;
