import React, {useEffect} from 'react';
import './css/main.css';
import {Slider} from "./components/slider";

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <header className="header header-small">
                <div className="header-inner">
                    <div className="header-inner-background">
                        <div className="header-inner-background-left"></div>
                        <div className="header-inner-background-center">
                            <img className="header-inner-background-center-image" src="https://images.unsplash.com/photo-1593405510616-610292359434?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />
                        </div>
                        <div className="header-inner-background-right"></div>
                    </div>
                </div>
            </header>
            <Slider name={"Reach out!"}></Slider>
            <main className="main">
                <div className="contact-wrapper view-width">
                    <form className="contact-form">
                        <div className="contact-form-line-top"></div>
                        <div className="contact-form-line-bottom"></div>
                        <h2 className="contact-form-title">Contact us!</h2>
                        <fieldset className="contact-form-field contact-form-field-double">
                            <div className="contact-form-field-input">
                                <label className="contact-form-field-input-title">First Name</label>
                                <input className="contact-form-field-input-inner" type="fname" placeholder="First Name" />
                            </div>
                            <div className="contact-form-field-input">
                                <label className="contact-form-field-input-title">Last Name</label>
                                <input className="contact-form-field-input-inner" type="lname" placeholder="Last Name" />
                            </div>
                        </fieldset>
                        <fieldset className="contact-form-field contact-form-field-single">
                            <div className="contact-form-field-input">
                                <label className="contact-form-field-input-title">Email</label>
                                <input className="contact-form-field-input-inner" type="email" placeholder="Email" />
                            </div>
                        </fieldset>
                        <fieldset className="contact-form-field contact-form-field-single">
                            <div className="contact-form-field-text">
                                <label className="contact-form-field-input-title">Your Message</label>
                                <textarea className="contact-form-field-text-inner" placeholder="Message"></textarea>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </main>
        </>
    );
}

export default Contact;
