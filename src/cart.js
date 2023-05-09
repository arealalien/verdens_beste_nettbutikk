import React, {useEffect} from 'react';
import './css/main.css';
import { Slider } from "./components/slider";
import { useLocation } from "react-router-dom";
import { clothes } from "./components/productList";
import { cart } from './components/cartList';

function Cart() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    const location = useLocation();
    if (location.state) {
        const productId = location.state && location.state.productId;
        const product = clothes.find(clothe => clothe.productId === productId);

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
                                            {product && (
                                                <img className="cart-item-left-image" src={product.productImage} alt="" />
                                            )}
                                        </div>
                                        <div className="cart-item-right">
                                            {product && (
                                                <h2 className="cart-item-right-title">{product.productName}</h2>
                                            )}
                                            <p className="cart-item-right-text">Size: M</p>
                                            {product && (
                                                <p className="cart-item-right-price">{product.productPrice}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-items-inner-right">
                                <div className="cart-items-inner-right-inner">
                                    {product && (
                                        <h2 className="cart-items-inner-right-title">Checkout - {product.productPrice}</h2>
                                    )}
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
                <Slider name={"Your Cart"}></Slider>
                <main className="main">
                    <p className="cart-text view-width">The cart doesn't save items you've added to cart. Go to a product and add it to see it here.</p>
                </main>
            </>
        );
    }
}

export default Cart;
