import { Fragment } from 'react';
import classes from './Prices.module.css'

import dinte from './dinte.jpg'
import { Link, NavLink } from "react-router-dom";
import Footer from '../Footer/Footer';



const Prices = () => {
    return <Fragment>
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
        <section className={classes.backgroundSection}>
            <section className={classes.boxes1}>
                <div className={classes.chenar}>
                    <p>Pret Consultatie Stomatologica:150 lei</p>
                    <p>Consultatie medic specialist:200 lei</p>
                    <p>Consultatie chirurgie BASIC:200 lei</p>
                    <p>Consultatie chirurgie PREMIUM:1350 - 1600 lei</p>
                    <p>Pret Consultatie Stomatologica Family Special:Pret special</p>
                </div>
                <div className={classes.chenar}>
                    <p>Membrana A-PRF:850 lei</p>
                    <p>Pret Implant Dentar ALPHA BIO:650 Euro </p>
                    <p>Pret Implant Dentar ALPHA BIO ICE:750 Euro</p>
                    <p>Pret Implant Dentar MEGAGEN ANYRIDGE:780 Euro</p>
                    <p>Pret Implant Dentar MIS Seven:750 Euro</p>
                </div>
                <div className={classes.chenar}>
                    <p>Pret Tratament Parodontoza Laser Therapy:3000 lei/arcada</p>
                    <p>Pret Tratament Parodontoza Laser Therapy si GBT:7500 lei/4 cadrane</p>
                    <p>Tratament Gingivita cu Airflow® Prophylaxis Master:2500 lei</p>
                    <p>Gingivectomie/gingivoplastie:600 lei/dinte</p>
                    <p>Cura parodontala:700 Euro/hemiarcada</p>
                </div>
            </section>
            <section className={classes.boxes2}>
                <div className={classes.chenar}>
                    <p>Pret detartraj cu ultrasunte:200 lei</p>
                    <p>PLATINUM Prophylaxis Pack:500 lei</p>
                    <p>GOLD Prophylaxis Pack:450 lei</p>
                    <p>SILVER Prophylaxis Pack:300 lei</p>
                    <p>Airflow® by EMS:250 lei</p>
                </div>
                <div className={classes.chenar}>
                    <p>Pret proteza dentara totala elastica Polyan:2200 lei</p>
                    <p>Pret proteza dentara partiala elastica Bio DentaPlast:2200 lei</p>
                    <p>Pret proteza dentara acrilica:1350 - 2200 lei</p>
                    <p>Pret proteza dentara scheletata cu crosete turnate/elastice:4000 lei</p>
                    <p>Pret proteza dentara uniterminala monobloc cu sisteme speciale:2500 lei</p>
                    <p>Pret proteza dentara scheletata cu sisteme speciale:	5500 lei</p>
                </div>
                <div className={classes.chenar}>
                    <p>Refacere tratament endodontic + obturatie de canal sub Microscop Endodontic Zeiss</p>
                    <p>Dinti monoradiculari:850 lei</p>
                    <p>Dinti biradiculari:1000 lei</p>
                    <p>Dinti triradiculari:1100 lei</p>
                    <p>Dinti cu configuratie anatomica speciala:1200 - 2000 lei</p>
                    <p>Tratament gangrena cu laser:300 - 600 lei</p>
                </div>
            </section>
            <NavLink to='/home' className={classes.link}>
                <p className={classes.specialP}>Pentru mai multe detalii sunati la numarul afisat pe pagina principala...</p>
            </NavLink>
            <Footer></Footer>
        </section>

    </Fragment>
}

export default Prices;