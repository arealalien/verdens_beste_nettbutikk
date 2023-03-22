import React, {useEffect} from 'react';
import './css/main.css';
import {Slider} from "./components/slider";

function Support() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <header className="header small-header"></header>
            <Slider name={"Support"}></Slider>
            <main className="main">

            </main>
        </>
    );
}

export default Support;
