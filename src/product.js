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
            <header className="header header-small">
                <div className="header-inner">
                    <div className="header-inner-background">
                        <div className="header-inner-background-left"></div>
                        <div className="header-inner-background-center">
                            <img className="header-inner-background-center-image" src={productImage} alt="" />
                        </div>
                        <div className="header-inner-background-right"></div>
                    </div>
                </div>
            </header>
            <main className="main">
                <Carts productName={productName} productPrice={productPrice} productImage={productImage}></Carts>
            </main>
        </>
    );
}

export default ProductView;
