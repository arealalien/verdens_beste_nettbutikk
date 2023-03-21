import React from "react";

export function Product({productName, productPrice, productImage}) {
    return (
        <>
            <div className="products-block">
                <div className="products-block-bottom">
                    <div className="products-block-bottom-left">
                        <h2 className="products-block-bottom-left-title">{productName}</h2>
                        <p className="products-block-bottom-left-price">{productPrice}</p>
                    </div>
                    <div className="products-block-bottom-right">
                        <button className="products-block-bottom-right-button">
                            <svg width="24px" height="24px" viewBox="0 0 343.36 278.75">
                                <path className="cls-1" d="m330.86,62.6v203.65H127.22m189.5-14.14S147.29,82.67,110.25,45.63C50.93-13.69,12.5,24.74,12.5,24.74"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="products-block-overlay"></div>
                <div className="products-block-background">
                    <img className="products-block-background-image" src={productImage} alt="" />
                </div>
            </div>
        </>
    )
}