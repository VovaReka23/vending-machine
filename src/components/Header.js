import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.png';
import basket from '../assets/img/basket.png';
import styles from '../assets/scss/Header.module.scss';
import Input from './Input'
import Available from './Available'

const Header = (props) => {
    return (
        <header className={styles.header}>
            <Link to={`/`}>
                <img className={styles.logo} src={logo} alt="logo" />
            </Link>
            <div>
                <Input lable="Pounds:" />
                <Input lable="Penny:" />
            </div>
            <Available money={props.money} />
            <Link to={`/basket`}>
                <img className={styles.basket} src={basket} alt="basket" />
            </Link>

        </header>
    )
}
const mapStateToProps = state => ({
    money: state.product.money
})
export default connect(mapStateToProps)(React.memo(Header))
