import React from 'react';
import './css/main.css';
import {Products} from "./components/products";
import {Slider} from "./components/slider";

function Product() {
    return (
        <>
            <header className="header">
                <h1>Product</h1>
            </header>
            <Slider name={"Spring Sale!"}></Slider>
            <Products></Products>
        </>
    );
}

export default Product;
