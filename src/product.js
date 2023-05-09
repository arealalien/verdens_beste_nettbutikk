import React, {useEffect} from 'react';
import './css/main.css';
import { useLocation } from 'react-router-dom';
import { Carts } from "./components/cart";
import { clothes } from "./components/productList";


function ProductView() {
    const location = useLocation();
    const productId = location.state && location.state.productId;
    const product = clothes.find(clothe => clothe.productId === productId);

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
                            {product && (
                                <img className="header-inner-background-center-image" src={product.productImages[0]} alt="" />
                            )}
                        </div>
                        <div className="header-inner-background-right"></div>
                    </div>
                </div>
            </header>
            <main className="main">
                {product && (
                    <Carts productId={product.productId}></Carts>
                )}
            </main>
        </>
    );
}

export default ProductView;
