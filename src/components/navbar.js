import logo from "../logo.svg";
import React from "react";
import {NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-inner view-width">
                    <div className="navbar-left">
                        <NavLink className="navbar-left-icon-wrapper" to="/"><img src={logo} className="navbar-left-logo" alt="logo"/></NavLink>
                    </div>
                    <div className="navbar-right">
                        <div className="navbar-right-items-wrapper">
                            <ul className="navbar-right-items">
                                <li className="navbar-right-item">
                                    <NavLink className="navbar-right-item-inner" to="/about">
                                        About
                                    </NavLink>
                                </li>
                                <li className="navbar-right-item">
                                    <NavLink className="navbar-right-item-inner" to="/contact">
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}