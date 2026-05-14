import React from "react";
import { Link } from "react-router-dom";
import "../style/home.css";
import "../style/footer.css";

const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-light pt-5 border-top">
        <div className="container">
          {/* Logo Section */}
          <div className="row justify-content-center mb-5">
            <div className="col-auto">
              <img
                src="\image\logo\Dbs.png"
                alt="Logo" 
                className="logo"
              />
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="row footer-main-content justify-content-center">
            {/* Get in Touch */}
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4 footer-column">
              <h3 className="footerName">Get in Touch</h3>
              <p className="footerPara">
                Dream Byte Solutions Pvt. Ltd<br />
                3rd Floor, above Bank of India,<br />
                Sahastradhara Road, Near IT Park,<br />
                Dehradun, Uttarakhand
              </p>
            </div>

            {/* Home Links */}
            <div className="col-lg-2 col-md-6 col-sm-6 mb-4 footer-column">
              <h3 className="footerName">Home</h3>
              <ul className="list-unstyled footer-links">
                <li className="footerParagraph">
                  <Link to="/#aboutus">About</Link>
                </li>
                <li className="footerParagraph">
                  <Link to="/services">Services</Link>
                </li>
                <li className="footerParagraph">
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="footerParagraph">
                  <Link to="/blogs">Blogs</Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4 footer-column">
              <h3 className="footerName">Contact</h3>
              <ul className="list-unstyled footer-links">
                <li className="footerParagraph">
                  <a href="tel:+918279720490">+91 8279720490</a>
                </li>
                <li className="footerParagraph">
                  <a href="tel:+919258332639">+91 9258332639</a>
                </li>
                <li className="footerParagraph">
                  <a href="mailto:info@dreambytesolution.com">
                    info@dreambytesolution.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Service Area */}
            <div className="col-lg-4 col-md-6 col-sm-6 mb-4 footer-column">
              <h3 className="footerName">Service Area</h3>
              <ul className="list-unstyled footer-links">
                <li className="footerParagraph">
                  <a href="tel:+918279720490">Dehradun</a>
                </li>
                <li className="footerParagraph">
                  <a href="tel:+919258332639">Gurgaon</a>
                </li>
                <li className="footerParagraph">
                  <a href="mailto:info@dreambytesolution.com">
                   Noida
                  </a>
                </li>
                <li className="footerParagraph">
                  <a href="mailto:info@dreambytesolution.com">
                  Delhi
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="footer-divider" />

          {/* Bottom Footer */}
          <div className="footer-bottom">
            <div className="footer-links-bottom">
              <Link to="/TermsAndCondition" className="footer-link-small">Terms & Conditions</Link>
              <span className="separator">|</span>
              <Link to="/privacy-policy" className="footer-link-small">Privacy Policy</Link>
            </div>
            <div className="footer-copyright">
              Design with by <b>Dream Byte Studio</b> © {new Date().getFullYear()}. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;