import React from "react";
import {NavLink} from "react-router-dom";

export function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-top">
                    <svg className="footer-top-logo" viewBox="0 0 887.46 404.28">
                        <text transform="translate(0 307.64)"><tspan x="0" y="0">C</tspan><tspan x="269.64" y="0">l</tspan><tspan x="339.49" y="0">o</tspan><tspan x="549.78" y="0">th</tspan></text>
                    </svg>
                </div>
                <div className="footer-bottom view-width">
                    <div className="footer-bottom-line-top"></div>
                    <div className="footer-bottom-line-bottom"></div>
                    <div className="footer-bottom-left">
                        <NavLink className="footer-bottom-left-logo" to="/">
                            <svg className="footer-bottom-left-logo-svg" viewBox="0 0 887.46 404.28">
                                <text transform="translate(0 307.64)"><tspan x="0" y="0">C</tspan><tspan x="269.64" y="0">l</tspan><tspan x="339.49" y="0">o</tspan><tspan x="549.78" y="0">th</tspan></text>
                            </svg>
                        </NavLink>
                    </div>
                    <div className="footer-bottom-right">
                        <ul className="footer-bottom-right-items">
                            <li className="footer-bottom-right-item">
                                <NavLink className="footer-bottom-right-item-inner" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="footer-bottom-right-item">
                                <NavLink className="footer-bottom-right-item-inner" to="/products">
                                    Products
                                </NavLink>
                            </li>
                            <li className="footer-bottom-right-item">
                                <NavLink className="footer-bottom-right-item-inner" to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="footer-bottom-right-items">
                            <li className="footer-bottom-right-item">
                                <NavLink className="footer-bottom-right-item-inner" to="/cart">
                                    Support
                                </NavLink>
                            </li>
                            <li className="footer-bottom-right-item">
                                <NavLink className="footer-bottom-right-item-inner" to="/cart">
                                    Terms of service
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}