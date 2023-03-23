import React, {useEffect} from 'react';
import './css/main.css';
import {Slider} from "./components/slider";

function Support() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <header className="header small-header"></header>
            <Slider name={"Support"}></Slider>
            <main className="main">
                <section className="support-form view-width">
                    <svg className="support-form-logo" viewBox="0 0 627.46 404.28">
                        <text transform="translate(0 307.64)"><tspan x="0" y="0">F</tspan><tspan x="129.64" y="0">A</tspan><tspan x="339.49" y="0">Q</tspan></text>
                    </svg>
                    <div className="support-form-inner">
                        <div className="support-form-inner-line-top"></div>
                        <div className="support-form-inner-line-bottom"></div>
                        <h2 className="support-form-inner-title">FAQ</h2>
                        <h3 className="support-form-inner-subtitle">How do I place an order?</h3>
                        <p className="support-form-inner-text">To place an order, simply browse our online shop and add the items you wish to purchase to your cart. Once you have added all of the items you want, proceed to checkout and follow the steps to complete your order.</p>
                        <h3 className="support-form-inner-subtitle">What payment methods do you accept?</h3>
                        <p className="support-form-inner-text">We accept all major credit cards as well as payment through our payment processor(s).</p>
                        <h3 className="support-form-inner-subtitle">What is your return policy?</h3>
                        <p className="support-form-inner-text">We offer a 14-day return policy for all products purchased through our online shop. To initiate a return, please contact us at support@cloth.com. Products must be returned in their original condition and packaging. Shipping costs for returns are the responsibility of the customer. Refunds will be issued within 7-14 days of receiving the returned product.</p>
                        <h3 className="support-form-inner-subtitle">What if I receive a damaged or defective item?</h3>
                        <p className="support-form-inner-text">If you receive a damaged or defective item, please contact us at [insert contact information] within 3 days of receiving the item. We will provide instructions for returning the item and issue a replacement or refund once the item is received.</p>
                        <h3 className="support-form-inner-subtitle">How do I track my order?</h3>
                        <p className="support-form-inner-text">Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to track the status of your shipment.</p>
                        <h3 className="support-form-inner-subtitle">Can I cancel my order?</h3>
                        <p className="support-form-inner-text">If you need to cancel your order, please contact us at support@cloth.com as soon as possible. We will do our best to accommodate your request, but please note that orders that have already been shipped cannot be cancelled.</p>
                        <h3 className="support-form-inner-subtitle">How can I contact customer service?</h3>
                        <p className="support-form-inner-text">You can contact customer service by emailing us at support@cloth.com, or use our contact page. We strive to respond to all inquiries within 24 hours.</p>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Support;
