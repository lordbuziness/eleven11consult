
import "./CTA.css";

function CTA() {
    return (
        <section className="about-cta" id="contact">

            <div className="about-cta__content">

                <span className="about-cta__eyebrow">
                    LET'S BUILD WHAT'S NEXT
                </span>

                <h2>
                    Ready to align your
                    <br />
                    business with a
                    <br />
                    consultancy that
                    <br />
                    understands your world?
                </h2>

                <a
                    href="/services"
                    className="about-cta__button"
                >
                    Explore Our Services
                    <span>↗</span>
                </a>

            </div>

            <div className="about-cta__mark">
                <span>11</span>
            </div>

        </section>
    );
}

export default CTA;

