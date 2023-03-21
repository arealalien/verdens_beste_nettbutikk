import React from 'react';
import './css/main.css';
import {Slider} from "./components/slider";

function Cart() {
    return (
        <>
            <header className="header small-header"></header>
            <Slider name={"Your Cart"}></Slider>
            <main className="main">

            </main>
        </>
    );
}

export default Cart;
