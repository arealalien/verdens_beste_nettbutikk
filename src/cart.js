import React, {useEffect} from 'react';
import './css/main.css';
import {Slider} from "./components/slider";
import {useLocation} from "react-router-dom";

function Cart() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    const location = useLocation();
    if (location.state) {
        const productName = location.state.productName;
        const productPrice = location.state.productPrice;
        const productImage = location.state.productImage;

        return (
            <>
                <header className="header small-header"></header>
                <Slider name={"Your Cart"}></Slider>
                <main className="main">
                    <section className="cart-items view-width">
                        <svg className="cart-items-inner-logo" viewBox="0 0 888.46 404.28">
                            <text transform="translate(0 307.64)"><tspan x="0" y="0">C</tspan><tspan x="225.64" y="0">A</tspan><tspan x="460.49" y="0">R</tspan><tspan x="670.78" y="0">T</tspan></text>
                        </svg>
                        <div className="cart-items-inner">
                            <div className="cart-items-inner-line-top"></div>
                            <div className="cart-items-inner-line-bottom"></div>
                            <div className="cart-items-inner-left">
                                <div className="cart-items-inner-left-inner">
                                    <h2 className="cart-items-inner-left-title">Your items</h2>
                                    <div className="cart-item">
                                        <div className="cart-item-left">
                                            <img className="cart-item-left-image" src={productImage} alt="" />
                                        </div>
                                        <div className="cart-item-right">
                                            <h2 className="cart-item-right-title">{productName}</h2>
                                            <p className="cart-item-right-text">Size: M</p>
                                            <p className="cart-item-right-price">{productPrice}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-items-inner-right">
                                <div className="cart-items-inner-right-inner">
                                    <h2 className="cart-items-inner-right-title">Checkout - {productPrice}</h2>
                                    <p className="cart-items-inner-right-text">(Checkout is currenty disabled for this prototype)</p>
                                    <button className="cart-items-inner-right-button">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        );
    } else {
        return (
            <>
                <header className="header small-header"></header>
                <Slider name={"Your Cart"}></Slider>
                <main className="main">
                    <p className="cart-text view-width">The cart doesn't save items you've added to cart. Go to a product and add it to see it here.</p>
                </main>
            </>
        );
    }
}

export default Cart;
