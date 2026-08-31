
import "./CTA.css";

function CTA() {
    return (
        <section className="about-cta" id="contact">

            <div className="about-cta__content">

                <span className="about-cta__eyebrow">
                    LET'S BUILD WHAT'S NEXT
                </span>

                <h2>
                    Ready to turn
                    <br />
                    insight into impact?
                </h2>

                <p>
                    Whether you are navigating complexity, exploring
                    opportunity, or building something new, we are ready
                    to move the conversation forward.
                </p>

                <a
                    href="#contact"
                    className="about-cta__button"
                >
                    Start a Conversation
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

