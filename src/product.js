import React, {useEffect} from 'react';
import './css/main.css';
import {useLocation} from 'react-router-dom';
import {Carts} from "./components/cart";


function ProductView() {
    const location = useLocation();
    const productName = location.state.productName;
    const productPrice = location.state.productPrice;
    const productImage = location.state.productImage;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <header className="header small-header"></header>
            <main className="main">
                <Carts productName={productName} productPrice={productPrice} productImage={productImage}></Carts>
            </main>
        </>
    );
}

export default ProductView;
