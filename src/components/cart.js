import React from "react";
import {useNavigate} from 'react-router-dom';

export function Carts({productName, productPrice, productImage}) {

    const navigate = useNavigate();

    const toCart = () => {
        navigate('/cart', {state: {productName: productName, productPrice: productPrice, productImage: productImage}});
    };

    return (
        <>
            <section className="product view-width">
                <div className="product-left">
                    <div className="product-left-container">
                        <img className="product-left-container-image" src={productImage} alt=""/>
                    </div>
                </div>
                <div className="product-right">
                    <h2 className="product-right-title">{productName}</h2>
                    <p className="product-right-price">{productPrice}</p>
                    <div className="product-right-size">
                        <div className="product-right-size-box product-right-size-box-stock">
                            <p>S</p>
                        </div>
                        <div className="product-right-size-box">
                            <p>M</p>
                        </div>
                        <div className="product-right-size-box product-right-size-box-stock">
                            <p>L</p>
                        </div>
                        <div className="product-right-size-box product-right-size-box-stock">
                            <p>XL</p>
                        </div>
                    </div>
                    <button className="product-right-button" onClick={() => {
                        toCart()
                    }}>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <title>Buy</title>
                            <g id="buy-ico-outer" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                               stroke-linecap="round" stroke-linejoin="round">
                                <g id="buy-ico" transform="translate(2.950000, 2.649693)" stroke-width="1.5">
                                    <path
                                        d="M12.7999111,6.82200709 L12.7999111,3.79000709 C12.8049,1.70200709 11.1159,0.00500709014 9.0279,3.55271368e-15 C6.9389,-0.00399290986 5.2429,1.68500709 5.2379,3.77300709 L5.2379,6.82200709"
                                        id="Stroke-1"/>
                                    <path
                                        d="M5.32907052e-15,11.557807 C5.32907052e-15,6.263807 2.255,4.498807 9.019,4.498807 C15.783,4.498807 18.038,6.263807 18.038,11.557807 C18.038,16.850807 15.783,18.615807 9.019,18.615807 C2.255,18.615807 5.32907052e-15,16.850807 5.32907052e-15,11.557807 Z"
                                        id="Stroke-3"/>
                                </g>
                            </g>
                        </svg>
                        <span>Add to cart</span>
                    </button>
                </div>
            </section>
        </>
    )
}