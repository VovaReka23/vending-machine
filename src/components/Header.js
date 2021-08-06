import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.png';
import basket from '../assets/img/basket.png';
import styles from '../assets/scss/Header.module.scss';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <Link to={`/`}>
                <img className={styles.logo} src={logo} alt="logo" />
            </Link>
            <Link to={`/basket`}>
                <img className={styles.basket} src={basket} alt="basket" />
            </Link>

        </header>
    )
}

export default Header
