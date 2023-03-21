import React from 'react';
import { useEffect } from 'react';
import './css/main.css';
import {useLocation} from 'react-router-dom';


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
                <section className="product view-width">
                    <div className="product-left">
                        <img className="product-left-image" src={productImage} alt="" />
                    </div>
                    <div className="product-right">
                        <h2 className="product-right-title">{productName}</h2>
                        <p className="product-right-price">{productPrice}</p>
                    </div>
                </section>
            </main>
        </>
    );
}

export default ProductView;
