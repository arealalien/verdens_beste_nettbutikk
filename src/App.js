import React from 'react';
import './css/main.css';
import {Navbar} from './components/navbar';
import {Footer} from './components/footer';
import {Route, Routes} from "react-router-dom";
import Home from "./home";
import Products from "./products";
import ProductView from "./product";
import Contact from "./contact";
import Cart from "./cart";
import Support from "./support";
import TermsOfService from "./tos";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Products" element={<Products/>}/>
                <Route path="/Product" element={<ProductView/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="/Support" element={<Support/>}/>
                <Route path="/Tos" element={<TermsOfService/>}/>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
