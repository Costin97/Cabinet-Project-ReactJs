import { Fragment, useEffect, useState } from 'react';
import classes from './Form.module.css'

const Form = (props) => {
    const [isNameBlur, setIsNameBlur] = useState(false);
    const [name, setName] = useState('');

    const [isPhoneBlur, setIsPhoneBlur] = useState(false);
    const [phone, setPhone] = useState('');


    const [isAdressBlur, setIsAdressBlur] = useState(false);
    const [adress, setAdress] = useState('');

    const [isEmailBlur, setIsEmailBlur] = useState(false);
    const [email, setEmail] = useState('');

    const [isError, setIsError] = useState();
    const [pop, setPop] = useState(false);

    let isButtonTrue = 'false';
    let buttonStyle = '';
    const formStyle = pop === false ? classes.formBox : classes.formBoxBehind;

    const validationHandler = () => {
        props.displayNone();
    }

    const nameBlurHandler = () => {
        setIsNameBlur(true);
    }

    const nameHandler = (event) => {
        setIsNameBlur(false);
        setName(event.target.value)
    }

    const phoneBlurHandler = () => {
        setIsPhoneBlur(true);
    }

    const phoneHandler = (event) => {
        setIsPhoneBlur(false);
        setPhone(event.target.value)
    }

    const adressBlurHandler = () => {
        setIsAdressBlur(true);
    }

    const adressHandler = (event) => {
        setIsAdressBlur(false);
        setAdress(event.target.value)
    }

    const emailBlurHandler = () => {
        setIsEmailBlur(true);
    }

    const emailHandler = (event) => {
        setIsEmailBlur(false);
        setEmail(event.target.value)
    }

    const submitDataHandler = async (information) => {
        try {
            await fetch('https://react-http-d2dc0-default-rtdb.firebaseio.com/inf.json', {
                method: 'POST',
                body: JSON.stringify({ information }),
            }
            );
            setIsError(false);
        }
        catch (error) {
            setIsError(true);
        }

    }

    const nameIsInvalid = isNameBlur && name.length <= 1
    const nameStyle = nameIsInvalid ? classes.invalidInput : classes.name

    const phoneIsInvalid = isPhoneBlur && phone.length < 10
    const phoneStyle = phoneIsInvalid ? classes.invalidInput : classes.phone

    const adressIsInvalid = isAdressBlur && adress.length <= 1
    const adressStyle = adressIsInvalid ? classes.invalidInput : classes.adress

    let emailValidation = false;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        emailValidation = true
    }
    else {
        emailValidation = false
    }
    const emailIsInvalid = isEmailBlur && !emailValidation
    const emailStyle = emailIsInvalid ? classes.invalidInput : classes.email

    if (!nameIsInvalid && !phoneIsInvalid && !adressIsInvalid && !emailIsInvalid && name && email && adress && phone) {
        isButtonTrue = 'true'
    }

    if (isButtonTrue === 'true') {
        buttonStyle = classes.trueButton
    } else {
        buttonStyle = classes.falseButton
    }

    if (pop === true) {
        console.log('ceva');
    }

    buttonStyle = pop === true ? classes.buttonDisplayNone : buttonStyle;


    const formSubmit = (event) => {

        event.preventDefault();

        const information = {
            name: name,
            phone: phone,
            adress: adress,
            email: email
        }

        submitDataHandler(information);

        if (isError === false) {
            props.displayNone();
        }
    }

    useEffect(() => {

        if (isError === false) {
            // props.displayNone();
            setPop(true);
        }
    }, [isError, props])



    return (<Fragment>
        <section className={classes.backdrop} onClick={validationHandler} />
        <div className={classes.container}>
            <div className={formStyle}>
                <h1>Request an appointment</h1>
                <form className={classes.form}>
                    <input id='name' type='text' placeholder={'Name'} onBlur={nameBlurHandler} onChange={nameHandler} className={nameStyle}></input>
                    {nameIsInvalid ? <p className={classes.inputAttention}>Please enter a proper name!</p> : ''}
                    <input id='number' type='number' placeholder="Phone Number" onBlur={phoneBlurHandler} onChange={phoneHandler} className={phoneStyle}></input>
                    {phoneIsInvalid ? <p className={classes.inputAttention}>Your phone number should have at least 10 digits!</p> : ''}
                    <input id='adress' type='text' placeholder="Adress" onBlur={adressBlurHandler} onChange={adressHandler} className={adressStyle}></input>
                    {adressIsInvalid ? <p className={classes.inputAttention}>Please enter a valid adress!</p> : ''}
                    <input id='emailAdress' type='text' placeholder="Email Adress" onBlur={emailBlurHandler} onChange={emailHandler} className={emailStyle}></input>
                    {emailIsInvalid ? <p className={classes.inputAttention}>Please enter a valid email!Ex: name @yahoo.com</p> : ''}
                    <input id='reason' type='text' placeholder="Please,tell us more about your needs." className={classes.specialInput}></input>
                    {isButtonTrue === 'true' ? <button onClick={formSubmit} className={buttonStyle}>SUBMIT</button> : <button className={buttonStyle} disabled>SUBMIT</button>}
                </form>
                {isError === true ? <p className={classes.error}>Something went wrong!<br />Please try to submit again!</p> : ''}
            </div>
            {pop === true ?
                <div className={classes.containerPara}>
                    <div className={classes.popPara}>
                        <p>Data was succesfully sent!</p>
                        <button className={classes.popButton} onClick={validationHandler}>OK</button>
                    </div>
                </div> : ''}
        </div>
    </Fragment>)
}

export default Form;