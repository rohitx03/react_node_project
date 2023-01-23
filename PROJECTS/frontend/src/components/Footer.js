import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Footer.css';

function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-xs-12 col-sm-12'>
                            <div className='logo-content'>
                                <h1 className='mb-3 text-white' style={{ fontFamily: '"Barlow",sans-serif', fontSize: '32px', fontWeight: '700' }}>LOGO</h1>
                                <p style={{ fontFamily: '"Barlow",sans-serif', fontSize: '16px', color: '#9fa6bd' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                                <div className='footer-soical'>
                                    <ul className='d-flex p-0'>
                                        <li> <a target="blank" href='https://twitter.com/'><i class="bi bi-twitter"></i></a></li>
                                        <li> <a target="blank" href='https://www.facebook.com/'><i class="bi bi-facebook"></i></a></li>
                                        <li> <a target="blank" href='https://www.linkedin.com/'><i class="bi bi-linkedin"></i></a></li>
                                        <li> <a target="blank" href='https://www.instagram.com/'><i class="bi bi-instagram"></i></a></li>
                                    </ul>
                                    {/* <a target="blank" href='https://twitter.com/'><i class="bi bi-twitter"></i></a>
                            <a target="blank" href='https://www.facebook.com/'><i class="bi bi-facebook"></i></a>
                            <a target="blank" href='https://www.linkedin.com/'><i class="bi bi-linkedin"></i></a>
                            <a target="blank" href='https://www.instagram.com/'><i class="bi bi-instagram"></i></a> */}
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-xs-12 col-sm-12'>
                            <div className='footer-menu'>
                                <h1 className='footer-heading mb-3'>Quick Links</h1>
                                <ul style={{ paddingLeft: '10px' }}>
                                    <li><NavLink href='/about'>About</NavLink></li>
                                    <li><NavLink href=''>Services</NavLink></li>
                                    <li><NavLink href='/blog'>Blog</NavLink></li>
                                    <li><NavLink href=''>Pages</NavLink></li>
                                    <li><NavLink href='/contact'>Contact</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-xs-12 col-sm-12'>
                            <div className='footer-address'>
                                <h1 className='footer-heading mb-3'>Contact</h1>
                                <p style={{ fontFamily: '"Barlow",sans-serif', fontSize: '16px', color: '#9fa6bd' }}>Xyz Street, Xys City, Xyz State, India, Pincode-000000</p>
                                <ul style={{ paddingLeft: '10px' }}>
                                    <li><a href='tel:9779026425'>Phone: +(977)902 6425</a></li>
                                    <li><a href='tel:1234567890'>Cell: +(977)902 6425</a></li>
                                </ul>

                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-xs-12 col-sm-12'>
                        <h1 className='footer-heading mb-3'>Social Links</h1>

                            <div className='footer-social'>
                                <a href='https://www.instagram.com/rohitx03/' target='blank'><i class="bi bi-instagram"></i></a>
                                <a href='https://www.facebook.com/profile.php?id=100024797594844' target='blank'><i class="bi bi-facebook"></i></a>
                                <a href='https://github.com/rohitx03' target='blank'><i class="bi bi-github"></i></a>
                                <a href='https://www.linkedin.com/in/rohit-sagar-346256259/ ' target='blank'><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='row py-5'>
                        <div className='col-12'>
                            <p style={{ fontFamily: '"Barlow",sans-serif', fontSize: '16px', color: '#9fa6bd' }}>Copyright ©2022 All rights reserved | Made By Rohit</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
