import "./BloomtownFooter.css";
import { useState } from "react";

import {
    FaFacebookF,
    FaInstagram,
} from "react-icons/fa";

import bloomLogo from "../../asset/images/bloomlogo.svg";

function BloomtownFooter() {
    const [showWelcome, setShowWelcome] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <footer className="bloomtown-footer">

            {/* =========================================
                WELCOME POPUP
            ========================================= */}

            {showWelcome && (
                <div className="bloomtown-welcome-popup">

                    <div className="bloomtown-welcome-popup__card">

                        <button
                            type="button"
                            className="bloomtown-welcome-popup__close"
                            onClick={() => setShowWelcome(false)}
                            aria-label="Close"
                        >
                            ×
                        </button>

                        <img
                            src={bloomLogo}
                            alt="BloomTown"
                            className="bloomtown-welcome-popup__logo"
                        />

                        <span className="bloomtown-welcome-popup__eyebrow">
                            WELCOME TO BLOOMTOWN
                        </span>

                        <h2>
                            Welcome to the
                            <br />
                            <em>BloomTown Family.</em>
                        </h2>

                        <p>
                            You're officially part of the BloomTown
                            community. We'll keep you updated with our
                            latest news, events, opportunities, and
                            experiences.
                        </p>

                        <button
                            type="button"
                            className="bloomtown-welcome-popup__button"
                            onClick={() => setShowWelcome(false)}
                        >
                            OK
                        </button>

                    </div>

                </div>
            )}


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
                    href="#bloomtown-newsletter"
                    className="bloomtown-footer__cta-button"
                >
                    Join BloomTown
                </a>

            </div>


            {/* =========================================
                MAIN FOOTER
            ========================================= */}

            <div className="bloomtown-footer__main">


                {/* =====================================
                    BRAND
                ===================================== */}

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


                {/* =====================================
                    NAVIGATION
                ===================================== */}

                <div className="bloomtown-footer__column">

                    <h3>
                        Explore
                    </h3>

                    <a href="#bloom-experience">
                        The Bloom Experience
                    </a>

                    <a href="#bloomtownmoments">
                        BloomTown Moments
                    </a>

                    <a href="#bloomtown-faq">
                        BloomTown FAQ
                    </a>

                    <a href="#bloom-oclock">
                        Bloom O'Clock
                    </a>

                </div>


                {/* =====================================
                    CONTACT
                ===================================== */}

                <div className="bloomtown-footer__column">

                    <h3>
                        Contact Us
                    </h3>

                    <a href="mailto:https://formsubmit.co/ajax/bloomtown@eleven11consult.com">
                    bloomtown@eleven11consult.com
                        
                    </a>

                    <a href="tel:09166425251">
                        +234 916 642 5251
                    </a>

                    <span>
                        Lagos, Nigeria
                    </span>

                </div>


                {/* =====================================
                    NEWSLETTER
                ===================================== */}

                <div
                    id="bloomtown-newsletter"
                    className="bloomtown-footer__column bloomtown-footer__newsletter"
                >

                    <h3>
                        Stay Updated
                    </h3>

                    <p>
                        Get BloomTown news, events, opportunities,
                        and updates.
                    </p>


                    <form
                        className="bloomtown-footer__form"
                        onSubmit={async (e) => {

                            e.preventDefault();

                            const form = e.currentTarget;
                            const formData = new FormData(form);

                            setIsSubmitting(true);

                            try {

                                const response = await fetch(
                                    "https://formsubmit.co/ajax/bloomtown@eleven11consult.com",
                                    {
                                        method: "POST",
                                        body: formData,
                                        headers: {
                                            Accept: "application/json",
                                        },
                                    }
                                );

                                if (response.ok) {

                                    form.reset();

                                    setShowWelcome(true);

                                } else {

                                    alert(
                                        "Something went wrong. Please try again."
                                    );

                                }

                            } catch {

                                alert(
                                    "Something went wrong. Please try again."
                                );

                            } finally {

                                setIsSubmitting(false);

                            }

                        }}
                    >

                        <input
                            type="email"
                            name="email"
                            placeholder="Your email address"
                            aria-label="Your email address"
                            required
                        />


                        <input
                            type="hidden"
                            name="_subject"
                            value="New BloomTown Subscriber"
                        />


                        <button
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting
                                ? "Sending..."
                                : "Subscribe"}
                        </button>

                    </form>

                </div>

            </div>


            {/* =========================================
                SOCIALS
            ========================================= */}

            <div className="bloomtown-footer__socials">

                <a
                    href="https://www.facebook.com/bloomtownafrica"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="BloomTown on Facebook"
                >
                    <FaFacebookF />
                </a>


                <a
                    href="https://www.instagram.com/bloomtownafrica"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="BloomTown on Instagram"
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