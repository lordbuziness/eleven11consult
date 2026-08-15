import "./BloomtownFooter.css";

import {
    FaFacebookF,
    FaInstagram,
} from "react-icons/fa";

import bloomLogo from "../../asset/images/bloomlogo.svg";

function BloomtownFooter() {
    return (
        <footer className="bloomtown-footer">

            {/* =========================================
                CLOSING CTA
            ========================================= */}

            <div className="bloomtown-footer__cta">

                <span className="bloomtown-footer__eyebrow">
                    THE BLOOMTOWN JOURNEY
                </span>

                <h2>
                    Let’s Bloom
                    <br />
                    <em>Together.</em>
                </h2>

                <p>
                    Building brighter futures through talent,
                    creativity, innovation, and community.
                </p>

                <a
                    href="#contact"
                    className="bloomtown-footer__cta-button"
                >
                    Join BloomTown
                </a>

            </div>


            {/* =========================================
                MAIN FOOTER
            ========================================= */}

            <div className="bloomtown-footer__main">

                {/* BRAND */}

                <div className="bloomtown-footer__brand">

                    <div className="bloomtown-footer__logo">
                        <img
                            src={bloomLogo}
                            alt="BloomTown"
                        />
                    </div>

                    <p>
                        Raising tomorrow's leaders today through
                        character development, talent discovery,
                        and innovation.
                    </p>

                </div>


                {/* NAVIGATION */}

                <div className="bloomtown-footer__column">

                    <h3>
                        Explore
                    </h3>

                    <a href="#about">
                        About
                    </a>

                    <a href="#districts">
                        Age Districts
                    </a>

                    <a href="#fest">
                        BloomTown Fest
                    </a>

                    <a href="#gallery">
                        Talent Gallery
                    </a>

                    <a href="#ai-hub">
                        Bloom AI Hub
                    </a>

                </div>


                {/* CONTACT */}

                <div className="bloomtown-footer__column">

                    <h3>
                        Contact Us
                    </h3>

                    <a href="mailto:hello@bloomtown.ng">
                        hello@bloomtown.ng
                    </a>

                    <a href="tel:+2348012345678">
                        +234 801 234 5678
                    </a>

                    <span>
                        Lagos, Nigeria
                    </span>

                </div>


                {/* STAY UPDATED */}

                <div className="bloomtown-footer__column bloomtown-footer__newsletter">

                    <h3>
                        Stay Updated
                    </h3>

                    <p>
                        Get BloomTown news, events, opportunities,
                        and updates.
                    </p>

                    <form className="bloomtown-footer__form">

                        <input
                            type="email"
                            placeholder="Your email address"
                            aria-label="Your email address"
                        />

                        <button type="submit">
                            Subscribe
                        </button>

                    </form>

                </div>

            </div>


            {/* =========================================
                SOCIALS
            ========================================= */}

            {/* =========================================
    SOCIALS
========================================= */}

<div className="bloomtown-footer__socials">

    <a
        href="https://www.facebook.com/bloomtownafrica"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
    >
        <FaFacebookF />
    </a>

    <a
        href="https://www.instagram.com/bloomtownafrica"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
    >
        <FaInstagram />
    </a>

</div>

            {/* =========================================
                BOTTOM BAR
            ========================================= */}

            <div className="bloomtown-footer__bottom">

                <span>
                    © 2026 BloomTown. All rights reserved.
                </span>

                <span>
                    Raising Tomorrow's Leaders Today.
                </span>

            </div>

        </footer>
    );
}

export default BloomtownFooter;