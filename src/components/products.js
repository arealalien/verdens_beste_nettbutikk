import React from "react";
import {Product} from "./product";

export function Products({ident}) {
    return (
        <>
            <main className="main">
                <section id={ident} className="products view-width">
                    <Product productName={"Vintage Coat"} productPrice={"$ 59,99"} productImage={"https://images.unsplash.com/photo-1583994009785-37ec30bf9342?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1976&q=80"}></Product>
                    <Product productName={"Pink Dress"} productPrice={"$ 39,99"} productImage={"https://images.unsplash.com/photo-1526511253005-9a4a8cde2956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"}></Product>
                    <Product productName={"Flower Dress"} productPrice={"$ 69,99"} productImage={"https://images.unsplash.com/photo-1636517521390-c03f981ea01d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"}></Product>
                    <Product productName={"Cargo Pants"} productPrice={"$ 49,99"} productImage={"https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1976&q=80"}></Product>
                    <Product productName={"Yellow T-Shirt"} productPrice={"$ 13,99"} productImage={"https://images.unsplash.com/photo-1566678124698-45c71a49eb0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"}></Product>
                </section>
            </main>
        </>
    )
}