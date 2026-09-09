
import "./Homeabout.css";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import homeAboutImage from "./assets/images/homeabouimage.jpg";

function Homeabout() {
    return (
        <section className="homeabout">
            <div className="homeabout__container">
                {/* =========================================
                    INTRODUCTION
                ========================================= */}

                <div className="homeabout__intro">
                    <div className="homeabout__intro-content">
                        <span className="homeabout__eyebrow">
                            About Eleven 11 Consult
                        </span>

                        <h2>
                            Precision-Driven Strategy.
                            <br />
                            Built for the{" "}
                            <span>African Landscape.</span>
                        </h2>

                        <p className="homeabout__subheadline">
                            Consulting and Advisory for Industries That
                            Define the Continent.
                        </p>
                    </div>

                    <div className="homeabout__image-wrapper">
                        <img
                            src={homeAboutImage}
                            alt="Eleven 11 Consult"
                            className="homeabout__image"
                        />

                        <span className="homeabout__image-label">
                            ELEVEN11 / CONSULT
                        </span>
                    </div>
                </div>

                {/* =========================================
                    CONVICTION
                ========================================= */}

                <div className="homeabout__conviction">
                    <div className="homeabout__conviction-number">
                        <span>01</span>
                        <p>Our Conviction</p>
                    </div>

                    <div className="homeabout__conviction-content">
                        <p>
                            Eleven 11 Consult LTD was founded on a simple
                            conviction: that the most powerful businesses
                            in Africa are those that combine rigorous
                            strategy with compelling vision.
                        </p>

                        <p>
                            Led by seasoned broadcast journalist and
                            producer Krisilems, our firm brings together
                            specialists in media, technology, energy,
                            agriculture, and construction under a unified
                            philosophy — the{" "}
                            <strong>Pillars of Truth</strong> and{" "}
                            <strong>Blueprints for Growth.</strong>
                        </p>
                    </div>
                </div>

                {/* =========================================
                    MANIFESTO
                ========================================= */}

                <div className="homeabout__manifesto">
                    <div className="homeabout__manifesto-line" />

                    <div className="homeabout__manifesto-content">
                        <div className="homeabout__manifesto-copy">
                            <p>
                                We don't just advise.
                                <br />
                                <span>We align.</span>{" "}
                                <span>We build.</span>
                                <br />
                                We tell the story of{" "}
                                <strong>your success.</strong>
                            </p>
                        </div>

                        <Link
                            to="/about"
                            className="homeabout__link"
                        >
                            <span>Discover Eleven 11</span>

                            <span className="homeabout__link-icon">
                                <ArrowUpRight size={18} />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Homeabout;

