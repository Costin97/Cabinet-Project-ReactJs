import { Fragment } from 'react'
import classes from './Specialized.module.css'

const Specialized = (props) => {
    const removeHandler = () => {
        props.remove();
    }
    return <Fragment>
        <section className={classes.backdrop} onClick={removeHandler}></section>
        <div className={classes.container}>
            <div className={classes.box}>
                <h1>Specialized dental office</h1>
                <p>In order to permanently maintain the standard we have assumed, developing in Romania a luxury dental clinic, it was necessary that the basic foundation, offered by the dental offices that are part of the clinic, be added additional facilities, without which the idea of ​​luxury dental services would not have the consistency and credibility: Computer Dental Laboratory Tomography Imaging MORITA Japan, the world leader in dental imaging.</p>
            </div>
        </div>
    </Fragment>
}

export default Specialized;