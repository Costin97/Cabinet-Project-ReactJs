import React, { useState } from "react";
import classes from './MainPage.module.css'
import dinte from './dinte.jpg'
import Form from "./Form/Form";

import PhoneIcon from '@mui/icons-material/Phone';
import Specialized from './Pops/Specialized'
import Equipment from './Pops/Equipment'

import Footer from '../Footer/Footer';

import { Link, NavLink } from "react-router-dom";

const MainPage = () => {
    const [isForm, setIsForm] = useState(false);
    const [isSpecialized, setIsSpecialized] = useState(false);
    const [isEquipment, setIsEquipment] = useState(false);
    const formHandler = () => {
        setIsForm(true);
    }
    const formCancel = () => {
        setIsForm(false);
    }

    const specializedHandler = () => {
        setIsSpecialized(true)
    }

    const specializeCancel = () => {
        setIsSpecialized(false);
    }

    const equipmentHandler = () => {
        setIsEquipment(true);
    }

    const equipmentCancel = () => {
        setIsEquipment(false);
    }

    return (
        <React.Fragment>
            <header className={classes.header}>
                <div className={classes.logo} >
                    <Link to='/home'>
                        <img src={dinte} alt='Tooth' />
                    </Link>
                </div>
                <nav className={classes.nav}>
                    <ul>
                        <li> <NavLink to='/desprenoi' className={classes.link}>ABOUT US</NavLink></li>
                        <li> <NavLink to='/tarife' className={classes.link}>PRICES</NavLink></li>
                    </ul>
                </nav>
            </header>
            <section className={classes.overview}>
                <h1 className={classes.mainTitle}>Cabinet stomatologic specializat</h1>
                <button className={classes.mainButton} onClick={formHandler}>Programeaza-te</button>
                <div className={classes.phone}>
                    <PhoneIcon className={classes.phoneIcon} />
                    <p>Phone Nr. : 0728252274</p>
                </div>
            </section>
            {isForm ? <Form displayNone={formCancel} /> : ''}
            <section className={classes.searchBlock}>
                <ul>
                    <li onClick={specializedHandler}>Ce inseamna un cabinet stomatologic specializat?</li>
                    <li onClick={equipmentHandler}>Care sunt dotarile acestui cabinet stomatologic?</li>
                    <li>Cabinet stomatologic chirurgie.</li>
                    <li>Cabinet stomatologic endodontie.</li>
                </ul>
            </section>
            {isSpecialized ? <Specialized remove={specializeCancel} /> : ''}
            {isEquipment ? <Equipment remove={equipmentCancel} /> : ''}
            <Footer/>
        </React.Fragment>
    )
}

export default MainPage;