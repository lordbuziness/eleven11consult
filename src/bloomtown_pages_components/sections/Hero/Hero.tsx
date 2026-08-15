import "./Hero.css";

import bloomHero from "../../asset/images/Bloomhero.jpg";
import bloomLogo from "../../asset/images/bloomlogo.svg";

import {
    CalendarDays,
    Clock3,
    Phone,
    MapPin,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
} from "react-icons/fa";

import PaintStrokes from "../../PaintStroke/PaintStroke";
import BloomTownNavbar from "../../BloomTownNavbar/BloomTownNavbar";


function Hero() {
    return (
        <section className="bloomtown-hero">

            {/* NAVBAR */}
            <BloomTownNavbar />

            {/* HERO IMAGE */}
            <img
                src={bloomHero}
                alt=""
                className="bloomtown-hero__image"
            />

            {/* HERO CONTENT */}
            <div className="bloomtown-hero__content">

                {/* SLOGAN */}
                <p className="bloomtown-hero__slogan">
                    One Day. One Community. Endless Memories.
                </p>

                {/* BLOOMTOWN LOGO */}
                <div className="bloomtown-hero__card">
                    <img
                        src={bloomLogo}
                        alt="BloomTown Family Fest 2026"
                        className="bloomtown-hero__logo"
                    />
                </div>

                {/* FEATURES */}
                <div className="bloomtown-hero__features">

                    <PaintStrokes />

                    <p className="paint-strokes__description">
                        A day of family fun, shopping, networking & unforgettable memories!
                    </p>

                    <div className="paint-strokes__social">

                        <div className="paint-strokes__social-links">

                            <a
                                href="https://www.facebook.com/bloomtownafrica"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="BloomTown Africa on Facebook"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://www.instagram.com/bloomtownafrica"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="BloomTown Africa on Instagram"
                            >
                                <FaInstagram />
                            </a>

                        </div>

                        <span className="paint-strokes__hashtag">
                            #BloomTownFamilyFest2026
                        </span>

                    </div>

                </div>


                {/* FAMILY INVITATION */}
                <div className="bloomtown-hero__invitation">

                    <span>
                        Bring Your
                    </span>

                    <span className="bloomtown-hero__invitation-heart">
                        ♥
                    </span>

                    <strong>
                        Family And Friends
                    </strong>

                </div>


                {/* =========================================
                    EVENT + TICKETS
                ========================================= */}

                <div className="bloomtown-hero__event-wrapper">

                    {/* EVENT INFORMATION CARD */}

                    <div className="bloomtown-hero__event-card">

                        <div className="bloomtown-hero__event-details">

                            <div className="bloomtown-hero__event-detail">

                                <CalendarDays className="bloomtown-hero__event-icon" />

                                <div>
                                    <span className="bloomtown-hero__event-label">
                                        DATE
                                    </span>

                                    <strong>
                                        Sat, Oct 3, 2026
                                    </strong>
                                </div>

                            </div>


                            <div className="bloomtown-hero__event-detail">

                                <Clock3 className="bloomtown-hero__event-icon" />

                                <div>
                                    <span className="bloomtown-hero__event-label">
                                        TIME
                                    </span>

                                    <strong>
                                        1:00 PM
                                    </strong>
                                </div>

                            </div>


                            <div className="bloomtown-hero__event-detail">

                                <MapPin className="bloomtown-hero__event-icon" />

                                <div>
                                    <span className="bloomtown-hero__event-label">
                                        VENUE
                                    </span>

                                    <strong>
                                        Sam Shonibare Playground, Surulere
                                    </strong>
                                </div>

                            </div>


                            <div className="bloomtown-hero__event-detail">

                                <Phone className="bloomtown-hero__event-icon" />

                                <div>
                                    <span className="bloomtown-hero__event-label">
                                        INQUIRIES
                                    </span>

                                    <strong>
                                        09166425251
                                    </strong>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =========================================
                        TICKET CARD
                    ========================================= */}

                    <div className="bloomtown-hero__ticket-card">

                        <h3 className="bloomtown-hero__tickets-title">
                            TICKET PRICING
                        </h3>


                        <div className="bloomtown-hero__ticket-buttons">

                            <a
                                className="bloomtown-hero__ticket"
                                href="https://paystack.shop/bloomtown-family-fest?product=bloomtown-family-fest---adult-ticket-nbzfnh"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>
                                    Adult
                                </span>

                                <strong>
                                    ₦10,000
                                </strong>
                            </a>


                            <a
                                className="bloomtown-hero__ticket"
                                href="https://paystack.shop/bloomtown-family-fest?product=bloomtown-family-fest---childrens-ticket-yctrmc"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>
                                    Child (4–17)
                                </span>

                                <strong>
                                    ₦5,000
                                </strong>
                            </a>

                        </div>


                        <div className="bloomtown-hero__under-four">

                            <span>
                                Children Under 4
                            </span>

                            <strong>
                                FREE
                            </strong>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;