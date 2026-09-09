
import "./CTA.css";
import { Link } from "react-router-dom";

function CTA() {
    return (
        <section className="cta">
            <div className="cta__container">
                <div className="cta__content">
                    <p className="cta__eyebrow">
                        Let’s Build
                    </p>

                    <h2 className="cta__title">
                        Ready to Build
                        <br />
                        Something That Lasts?
                    </h2>

                    <p className="cta__description">
                        Whether you're launching a brand, scaling a
                        business, or telling a story that matters —
                        Eleven 11 Consult is your strategic partner.
                    </p>

                    <div className="cta__buttons">
                        <Link
                            to="/contact"
                            className="cta__button cta__button--primary"
                        >
                            Start a Project
                        </Link>

                        <Link
                            to="/contact"
                            className="cta__button cta__button--secondary"
                        >
                            Book a Consultation
                        </Link>
                    </div>
                </div>

                <div className="cta__visual" aria-hidden="true">
                    <div className="cta__circle cta__circle--outer">
                        <div className="cta__circle cta__circle--middle">
                            <div className="cta__circle cta__circle--inner">
                                <span>11</span>
                                <small>CONSULT</small>
                            </div>
                        </div>
                    </div>

                    <span className="cta__dot cta__dot--one" />
                    <span className="cta__dot cta__dot--two" />
                    <span className="cta__dot cta__dot--three" />
                </div>
            </div>
        </section>
    );
}

export default CTA;

