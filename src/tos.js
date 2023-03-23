import React, {useEffect} from 'react';
import './css/main.css';
import {Slider} from "./components/slider";

function TermsOfService() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <header className="header small-header"></header>
            <Slider name={"Terms of Service"}></Slider>
            <main className="main">
                <section className="tos view-width">
                    <div className="tos-left">
                        <h1 className="tos-left-title">Terms of Service</h1>
                    </div>
                    <div className="tos-center">
                        <p className="tos-center-text">Welcome to our online shop selling clothes. By accessing or using the Service, you agree to be bound by these terms of service. If you disagree with any part of the Terms, then you may not access the Service.</p>
                    </div>
                    <div className="tos-right">
                        <h2 className="tos-right-title">Download:</h2>
                        <ul className="tos-right-list">
                            <li className="tos-right-list-item"><a className="tos-right-list-item-link">
                                <svg viewBox="0 0 15.5 21.47">
                                    <g id="arrow-down-ico-outer">
                                        <g id="arrow-down-ico">
                                            <path d="m14.75,13.72s-4.14,7-7,7S.75,13.72.75,13.72"/>
                                        </g>
                                    </g>
                                    <line x1="7.75" y1=".75" x2="7.75" y2="15.18"/>
                                </svg>
                                <span>.pdf</span>
                            </a></li>
                            <li className="tos-right-list-item"><a className="tos-right-list-item-link">
                                <svg viewBox="0 0 15.5 21.47">
                                    <g id="arrow-down-ico-outer">
                                        <g id="arrow-down-ico">
                                            <path d="m14.75,13.72s-4.14,7-7,7S.75,13.72.75,13.72"/>
                                        </g>
                                    </g>
                                    <line x1="7.75" y1=".75" x2="7.75" y2="15.18"/>
                                </svg>
                                <span>.doc</span>
                            </a></li>
                            <li className="tos-right-list-item"><a className="tos-right-list-item-link">
                                <svg viewBox="0 0 15.5 21.47">
                                    <g id="arrow-down-ico-outer">
                                        <g id="arrow-down-ico">
                                            <path d="m14.75,13.72s-4.14,7-7,7S.75,13.72.75,13.72"/>
                                        </g>
                                    </g>
                                    <line x1="7.75" y1=".75" x2="7.75" y2="15.18"/>
                                </svg>
                                <span>.rtf</span>
                            </a></li>
                        </ul>
                    </div>
                    <div className="tos-left">
                        <h1 className="tos-left-title">Use of the Service</h1>
                    </div>
                    <div className="tos-center">
                        <p className="tos-center-text">The Service is intended solely for your personal, non-commercial use. You may not use the Service for any illegal or unauthorized purpose. You must not transmit any viruses, worms, or any code of a destructive nature. You are responsible for all activity that occurs under your account.</p>
                    </div>
                    <div className="tos-right">
                        <h2 className="tos-right-title">Content:</h2>
                        <ul className="tos-right-list">
                            <li className="tos-right-list-item"><a className="tos-right-list-item-link">Use of the Service</a></li>
                            <li className="tos-right-list-item"><a className="tos-right-list-item-link">Products and Pricing</a></li>
                            <li className="tos-right-list-item"><a className="tos-right-list-item-link">Payment and Shipping</a></li>
                            <li className="tos-right-list-item"><a className="tos-right-list-item-link">Returns and Refunds</a></li>
                        </ul>
                    </div>
                    <div className="tos-left">
                        <h1 className="tos-left-title">Products and Pricing</h1>
                    </div>
                    <div className="tos-center">
                        <p className="tos-center-text">All products sold through the Service are subject to availability. We reserve the right to discontinue any product at any time. Prices for products are subject to change without notice.</p>
                    </div>
                    <div className="tos-right">
                        <h2 className="tos-right-title"></h2>
                    </div>
                    <div className="tos-left">
                        <h1 className="tos-left-title">Payment and Shipping</h1>
                    </div>
                    <div className="tos-center">
                        <p className="tos-center-text">We accept payment through our payment processor(s) and all major credit cards. Payment is due at the time of purchase. We will ship the products to you at the address provided during checkout. We are not responsible for any lost or stolen packages. Shipping times may vary and are not guaranteed.</p>
                    </div>
                    <div className="tos-right">
                        <h2 className="tos-right-title"></h2>
                    </div>
                    <div className="tos-left">
                        <h1 className="tos-left-title">Returns and Refunds</h1>
                    </div>
                    <div className="tos-center">
                        <p className="tos-center-text">We offer a 14-day return policy for all products purchased through the Service. To initiate a return, please contact us at [insert contact information]. Products must be returned in their original condition and packaging. Shipping costs for returns are the responsibility of the customer. Refunds will be issued within [insert time frame] of receiving the returned product.</p>
                    </div>
                    <div className="tos-right">
                        <h2 className="tos-right-title"></h2>
                    </div>
                </section>
            </main>
        </>
    );
}

export default TermsOfService;
