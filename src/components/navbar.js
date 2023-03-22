import React from "react";
import {NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-inner view-width">
                    <div className="navbar-inner-line-top"></div>
                    <div className="navbar-inner-line-bottom"></div>
                    <div className="navbar-left">
                        <div className="navbar-left-items-wrapper">
                            <ul className="navbar-left-items">
                                <li className="navbar-left-item">
                                    <NavLink className="navbar-left-item-inner" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="navbar-left-item">
                                    <NavLink className="navbar-left-item-inner" to="/products">
                                        Products
                                    </NavLink>
                                </li>
                                <li className="navbar-left-item">
                                    <NavLink className="navbar-left-item-inner" to="/contact">
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center">
                        <NavLink className="navbar-center-icon-wrapper" to="/">
                            <svg className="navbar-center-logo" viewBox="0 0 887.46 404.28">
                                <text transform="translate(0 307.64)"><tspan x="0" y="0">C</tspan><tspan x="269.64" y="0">l</tspan><tspan x="339.49" y="0">o</tspan><tspan x="549.78" y="0">th</tspan></text>
                            </svg>
                        </NavLink>
                    </div>
                    <div className="navbar-right">
                        <div className="navbar-right-items-wrapper">
                            <ul className="navbar-right-items">
                                <li className="navbar-right-item">
                                    <div className="navbar-right-item-inner navbar-right-item-button">
                                        <input className="navbar-right-item-button-input" placeholder="Search..." />
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <title>Search</title>
                                            <g id="search-ico-outer" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                                                <g id="search-ico" transform="translate(2.000000, 2.000000)" stroke-width="1.5">
                                                    <path d="M9.27542857,0.714285714 C14.0030476,0.714285714 17.836381,4.54666667 17.836381,9.2752381 C17.836381,14.0038095 14.0030476,17.8361905 9.27542857,17.8361905 C4.54685714,17.8361905 0.71447619,14.0038095 0.71447619,9.2752381 C0.71447619,4.54666667 4.54685714,0.714285714 9.27542857,0.714285714 Z" id="Stroke-1"/>
                                                    <path d="M17.8989524,16.487619 C18.678,16.487619 19.3094286,17.12 19.3094286,17.8980952 C19.3094286,18.6780952 18.678,19.3095238 17.8989524,19.3095238 C17.1199048,19.3095238 16.4875238,18.6780952 16.4875238,17.8980952 C16.4875238,17.12 17.1199048,16.487619 17.8989524,16.487619 Z" id="Stroke-3"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </li>
                                <li className="navbar-right-item">
                                    <NavLink className="navbar-right-item-inner navbar-right-item-button" to="/cart">
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <title>Buy</title>
                                            <g id="buy-ico-outer" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                                                <g id="buy-ico" transform="translate(2.950000, 2.649693)" stroke-width="1.5">
                                                    <path d="M12.7999111,6.82200709 L12.7999111,3.79000709 C12.8049,1.70200709 11.1159,0.00500709014 9.0279,3.55271368e-15 C6.9389,-0.00399290986 5.2429,1.68500709 5.2379,3.77300709 L5.2379,6.82200709" id="Stroke-1"/>
                                                    <path d="M5.32907052e-15,11.557807 C5.32907052e-15,6.263807 2.255,4.498807 9.019,4.498807 C15.783,4.498807 18.038,6.263807 18.038,11.557807 C18.038,16.850807 15.783,18.615807 9.019,18.615807 C2.255,18.615807 5.32907052e-15,16.850807 5.32907052e-15,11.557807 Z" id="Stroke-3"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </NavLink>
                                </li>
                            </ul>
                            <div className="navbar-button">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}