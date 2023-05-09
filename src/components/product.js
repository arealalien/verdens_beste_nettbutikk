import React from "react";
import {useNavigate} from 'react-router-dom';

export function Product({productId, productName, productPrice, productImage, productImage2}) {

    const navigate = useNavigate();

    const toProduct = () => {
        navigate('/product',{state:{productId: productId}});
    };

        return (
            <>
                <div className="products-block" key={productId}>
                    <div className="products-block-bottom">
                        <div className="products-block-bottom-left" onClick={()=>{toProduct()}}>
                            <h2 className="products-block-bottom-left-title">{productName}</h2>
                            <p className="products-block-bottom-left-price">$ {productPrice}</p>
                        </div>
                        <div className="products-block-bottom-right" onClick={()=>{toProduct()}}>
                            <button className="products-block-bottom-right-button">
                                <svg width="24px" height="24px" viewBox="0 0 343.36 278.75">
                                    <path className="cls-1" d="m330.86,62.6v203.65H127.22m189.5-14.14S147.29,82.67,110.25,45.63C50.93-13.69,12.5,24.74,12.5,24.74"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="products-block-overlay" onClick={()=>{toProduct()}}></div>
                    <div className="products-block-background">
                        <img className="products-block-background-image" src={productImage} alt="" />
                        <img className="products-block-background-image-2" src={productImage2} alt="" />
                    </div>
                </div>
            </>
        )
}