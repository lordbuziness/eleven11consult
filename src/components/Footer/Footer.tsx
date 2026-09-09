
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">

                <div className="footer__brand">
                    <Link to="/" className="footer__logo">
                        ELEVEN11
                        <span>CONSULT</span>
                    </Link>

                    <h2>
                        Building the Future.
                        <br />
                        Telling the Story.
                    </h2>

                    <p>
                        Eleven 11 Consult LTD is a premier, multi-sectoral
                        consultancy operating at the intersection of media,
                        technology, and industrial development. Headquartered
                        in Nigeria. Built for Africa.
                    </p>
                </div>

                <div className="footer__column">
                    <span className="footer__label">
                        Visit Us
                    </span>

                    <address>
                        [Full Nigerian address — to be inserted]
                    </address>
                </div>

                <div className="footer__column">
                    <span className="footer__label">
                        Contact Us
                    </span>

                    <a href="tel:+2340000000000">
                        [Phone Number]
                    </a>

                    <a href="mailto:info@eleven11consult.com">
                        info@eleven11consult.com
                    </a>

                    <a
                        href="https://www.eleven11consult.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        www.eleven11consult.com
                    </a>
                </div>

                <div className="footer__column footer__column--links">
                    <span className="footer__label">
                        Quick Links
                    </span>

                    <nav className="footer__links">
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/works">Works</Link>
                        <Link to="/insights">Insights</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </div>

            </div>

            <div className="footer__statement">
                <span>
                    ELEVEN11 CONSULT
                </span>

                <h3>
                    Diverse Expertise.
                    <br />
                    Unified Vision.
                </h3>
            </div>

            <div className="footer__bottom">
                <p>
                    © 2025 Eleven 11 Consult LTD. All Rights Reserved.
                </p>

                <div className="footer__bottom-links">
                    <Link to="/privacy">
                        Privacy Policy
                    </Link>

                    <Link to="/terms">
                        Terms &amp; Conditions
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

