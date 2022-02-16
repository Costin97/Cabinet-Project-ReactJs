import { Fragment } from 'react'
import classes from './Equipment.module.css'

const Equipment = (props) => {
    const removeHandler = () => {
        props.remove();
    }
    return <Fragment>
        <section className={classes.backdrop} onClick={removeHandler}></section>
        <div className={classes.container}>
            <div className={classes.box}>
                <h1>Equipment</h1>
                <p>Lupe Carl Zeiss 9 Ergonomic Dental Units fully equipped in the three locations of which 7 are Chirana and 2 are Planmeca, Planmeca being known on the market as the most comfortable and ergonomic dental units for both patients and doctors.</p>
                <p>Ultrasonic descaling.</p>
                <p>Silent handpieces with fiber optics (turbine and contra-angle and right parts - have ceramic cylinders, and the noise produced is much lower than that found in any other clinics or dental offices).</p>
                <p>Surgical aspirator.</p>
                <p>Modern fingerprint system.</p>
                <p>Intraoral chamber = the patient can see the clinical situation in real time.</p>
                <p>Light curing lamp.</p>
                <p>Physio dispenser for implants.</p>
                <p>OMF Professional Surgery Kit.</p>
                <p>The implant system used in NeoClinique is the number 1 recognized on the world market, Straumann, which has now eliminated the waiting period until the completion of post-implant treatment, from 6 months to ...a few tens of minutes, with the possibility of immediate loading.</p>
                <p>100% aesthetic and efficient braces.</p>
                <p>Airflow dental and interdental cleaning device in depth.</p>
                <p>Dental and specialized instruments Carl Martin, Stoma, Hu Friedy.</p>
                <p>Etc...</p>
            </div>
        </div>
    </Fragment >
}

export default Equipment;