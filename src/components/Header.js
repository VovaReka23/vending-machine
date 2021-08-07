import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.png';
import basket from '../assets/img/basket.png';
import admin from '../assets/img/admin.png';
import styles from '../assets/scss/Header.module.scss';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <Link to={`/vending-machine`}>
                <img className={styles.logo} src={logo} alt="logo" />
            </Link>
            <div className={styles.rightBlock}>
                <Link to={`/vending-machine/basket`}>
                    <img className={styles.basket} src={basket} alt="basket" />
                </Link>
                <Link to={`/vending-machine/admin`}>
                    <img className={styles.admin} src={admin} alt="admin" />
                </Link>
            </div>

        </header>
    )
}

export default Header
