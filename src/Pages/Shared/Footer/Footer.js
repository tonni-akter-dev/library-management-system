import React from 'react';
import { NavLink } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
  return (
    <div className='mt-5'>
      <footer id="footer" className="footer-1 mt-5">
        <div className="main-footer widgets-dark typo-light">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget subscribe no-box">
                 

                  <h5 className="widget-title">Presidency University<span></span></h5>
                  <p>Presidency University is an institution dedicated to excellence in teaching, research, training, and community services. </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">Get Started<span></span></h5>
                  <p>Get access to your full Training and Marketing Suite.</p>
                  <a className="btn" href="/" target="_blank">Subscribe Now</a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">CONTACT US<span></span></h5>
                  <ul className="thumbnail-widget">
                    <li>
                      <div className="thumb-content"><a href="http://www.presidency.edu.bd/">PU Website</a></div>
                    </li>
                    <li>
                      <div className="thumb-content"><a href="#.">Top Leaders</a></div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">Contact Us<span></span></h5>

                  <p><a href="mailto:info@domain.com" title="glorythemes">library@pu.edu.bd</a></p>
                  <ul className="social-footer2">
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>
                  Copyright 2022 © Presidency University | Designed by Tonni Akter
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;