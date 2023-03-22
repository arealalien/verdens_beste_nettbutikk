import React, {useEffect} from 'react';
import './css/main.css';
import {Products} from "./components/products";
import {Slider} from "./components/slider";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <header className="header">
                <div className="header-inner view-width">
                    <div className="header-inner-title">
                        <span>Welcome to</span>
                        <svg className="header-inner-title-logo" viewBox="0 0 887.46 404.28">
                            <text transform="translate(0 307.64)"><tspan x="0" y="0">C</tspan><tspan x="269.64" y="0">l</tspan><tspan x="339.49" y="0">o</tspan><tspan x="549.78" y="0">th</tspan></text>
                        </svg>
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
            <Products ident={"showcase"}></Products>
        </>
    );
}

export default Home;
