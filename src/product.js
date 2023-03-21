import React from 'react';
import './css/main.css';
import {Products} from "./components/products";
import {Slider} from "./components/slider";

function Product() {
    return (
        <>
            <header className="header small-header"></header>
            <Slider name={"Spring Sale!"}></Slider>
            <Products ident={"view"}></Products>
        </>
    );
}

export default Product;
