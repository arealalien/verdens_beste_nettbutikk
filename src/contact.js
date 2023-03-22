import React, {useEffect} from 'react';
import './css/main.css';
import {Slider} from "./components/slider";

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <header className="header small-header"></header>
            <Slider name={"Reach out!"}></Slider>
            <main className="main">

            </main>
        </>
    );
}

export default Contact;
