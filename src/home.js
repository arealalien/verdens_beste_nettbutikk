import React from 'react';
import './css/main.css';
import {Products} from "./components/products";
import {Slider} from "./components/slider";

function Home() {
    return (
        <>
            <header className="header">
                <div className="header-inner view-width">
                    <div className="header-inner-title">
                        <span>Verdens Beste</span>
                        <h1>Nettbutikk</h1>
                    </div>
                    <div className="header-inner-background">
                        <div className="header-inner-background-left"></div>
                        <div className="header-inner-background-center">
                            {/*<img className="header-inner-background-center-image" src="https://images.unsplash.com/photo-1605304627402-4ccc82b54fa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" alt="" />*/}
                            <img className="header-inner-background-center-image" src="https://images.unsplash.com/photo-1593405510616-610292359434?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />
                        </div>
                        <div className="header-inner-background-right"></div>
                    </div>
                </div>
            </header>
            <Slider name={"Spring Sale!"}></Slider>
            <Products></Products>
        </>
    );
}

export default Home;
