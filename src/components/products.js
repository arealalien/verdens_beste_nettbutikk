import React from "react";
import { Product } from "./product";
import { clothes } from "./productList";

export function Products({ident, amount}) {
    const productsToRender = amount ? clothes.slice(0, amount) : clothes;

    return (
        <>
            <main className="main">
                <section id={ident} className="products view-width">
                    {productsToRender.map((clothe) => (
                        <Product
                            productId={clothe.productId}
                            productName={clothe.productName}
                            productPrice={clothe.productPrice}
                            productImage={clothe.productImages[0]}
                            productImage2={clothe.productImages[1]}
                        />
                    ))}
                </section>
            </main>
        </>
    )
}