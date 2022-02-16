import { Fragment } from 'react';
import classes from './AboutUs.module.css'
import { Link, NavLink } from "react-router-dom";
import dinte from './dinte.jpg'
import m1 from './m1.jpeg';
import manager from './manager.jpg'
import m2 from './m2.jpg'

import Footer from '../Footer/Footer'


const AboutUs = () => {
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
        <section className={classes.bkSection}>
            <h2 className={classes.title}>Our great staff</h2>
            <section className={classes.photoSection}>
                <div className={classes.photoContainer}>
                    <div className={classes.imgDiv}>
                        <img src={manager} alt='manager' className={classes.me} />
                    </div>
                    <h1 className={classes.h11}>Mr. Roscan Costin-Stefan</h1>
                    <p>Senior Web Developer</p>
                    <p>Ex Google Web Dev.</p>
                    <p>Ex Java FrontEnd Dev.</p>
                    <p>Absolvent UPB Automatica si Calculatoare</p>
                </div>
                <div className={classes.photoContainer}>
                    <div className={classes.imgDiv}>
                        <img src={m1} alt='medic1' />
                    </div>
                    <h1>Dr. Essam Justine-Celine
                    </h1>
                    <p>Medic Specialist Chirurgie Orala</p>
                    <p>Membru International Team for Implantology Switzerland (ITI)</p>
                    <p>Membru al Societatii de Parodontologie Israel</p>
                    <p>Absolvent UMF Carol Davila</p>
                </div>
                <div className={classes.photoContainer}>
                    <div className={classes.imgDiv}>
                        <img src={m2} alt='medic2' className={classes.specialImg} />
                    </div>
                    <h1 id='specialh1' className={classes.specialh1}>Dr. Gheorghe Popeasca-Mirela</h1>
                    <p id='specialp' className={classes.specialp}>Director Executiv</p>
                    <p id='specialp' className={classes.specialp}>Director Executiv</p>
                    <p id='specialp' className={classes.specialp}>Estetica si Protetica Dentara</p>
                    <p id='specialp' className={classes.specialp}>Medic specialist Stomatologie Generala Estetica dentara si Protetica</p>
                    <p id='specialp' className={classes.specialp}>Absolvent UMF Carol Davila</p>
                </div>
            </section>
            <div className={classes.footerDiv}>
                <Footer />
            </div>
        </section>
    </Fragment>
}

export default AboutUs;