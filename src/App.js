import React from 'react';
import './css/main.css';
import {Navbar} from './components/navbar';
import {Footer} from './components/footer';
import {NavLink, Route, Routes} from "react-router-dom";
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
            <div className="support-chat">
                <NavLink className="support-chat-blob" to="/support">
                    <svg className="support-chat-blob-icon" viewBox="0 0 24 24" version="1.1">
                        <g id="Iconly/Curved/Chat" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                            <g id="Chat" transform="translate(2.000000, 2.000000)">
                                <line x1="13.9394" y1="10.413" x2="13.9484" y2="10.413" id="Stroke-11" stroke-width="2"/>
                                <line x1="9.9304" y1="10.413" x2="9.9394" y2="10.413" id="Stroke-13" stroke-width="2"/>
                                <line x1="5.9214" y1="10.413" x2="5.9304" y2="10.413" id="Stroke-15" stroke-width="2"/>
                                <path d="M17.0710351,17.0698449 C14.0159481,20.1263505 9.48959549,20.7867004 5.78630747,19.074012 C5.23960769,18.8538953 1.70113357,19.8338667 0.933341969,19.0669763 C0.165550368,18.2990808 1.14639409,14.7601278 0.926307229,14.213354 C-0.787154393,10.5105699 -0.125888852,5.98259958 2.93020311,2.9270991 C6.83146881,-0.9756997 13.1697694,-0.9756997 17.0710351,2.9270991 C20.9803405,6.8359285 20.9723008,13.1680512 17.0710351,17.0698449 Z" id="Stroke-4" stroke-width="1.5"/>
                            </g>
                        </g>
                    </svg>
                </NavLink>
            </div>
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
