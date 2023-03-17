import React from 'react';
import './css/main.css';
import {Navbar} from './components/navbar';
import {Footer} from './components/footer';
import {Route, Routes} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";

function App() {
    return (
        <div className="App">
                <Navbar></Navbar>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/About" element={<About/>}/>
                        <Route path="/Contact" element={<Contact/>}/>
                    </Routes>
                <Footer></Footer>
        </div>
    );
}

export default App;
