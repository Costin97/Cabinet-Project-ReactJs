import { useState } from 'react';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Footer.module.css'

const Footer = () => {
    const [terms, setTerms] = useState(false);
    const termsHandler = () => {
        setTerms(true)
    }
    return (
        <Fragment>
            <div className={classes.box}>
                <section className={classes.container}>
                    <p><NavLink to='/support' className={classes.link}>Support</NavLink></p>
                    <p><NavLink to='/termsofuse' className={classes.link}>Terms of Use</NavLink></p>
                    <p><NavLink to='/privacypolicy' className={classes.link}>Privacy Policy</NavLink></p>
                </section>
            </div>
        </Fragment>
    )
}

export default Footer;