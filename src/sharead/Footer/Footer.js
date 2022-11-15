import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footerImg'>
            <footer>
                <div className="footer p-10  text-base-content">
                    <div>
                        <span className="footer-title">Services</span>
                        <Link to={'/'} className="link link-hover">Emergency Checkup</Link>
                        <Link to={'/'} className="link link-hover">Monthly Checkup</Link>
                        <Link to={'/'} className="link link-hover">Weekly Checkup</Link>
                        <Link to={'/'} className="link link-hover">Deep Checkup </Link>
                    </div>
                    <div>
                        <span className="footer-title">ORAL HEALTH</span>
                        <Link to={'/'} className="link link-hover">Fluoride Treatment</Link>
                        <Link to={'/'} className="link link-hover">Cavity Filling</Link>
                        <Link to={'/'} className="link link-hover">Teath Whitening</Link>

                    </div>
                    <div>
                        <span className="footer-title">OUR ADDRESS</span>
                        <Link to={'/'} className="link link-hover">New York - 101010 Hudson</Link>
                    </div>
                </div>
                <div className="footer footer-center p-4  text-base-content">
                    <p>Copyright © 2022 - All right reserved by <span className='text-primary font-bold'>Lifecare Hospital</span></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;