import React, {useEffect} from 'react';
import './css/main.css';
import {Products} from "./components/products";
import {Slider} from "./components/slider";

function Product() {
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
            <Slider name={"Spring Sale!"}></Slider>
            <Products ident={"view"}></Products>
        </>
    );
}

export default Product;
