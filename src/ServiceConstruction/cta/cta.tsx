
import "./cta.css";

function ConstructionCTA() {
    return (
        <section className="construction-cta">
            <div className="construction-cta__content">
                <span>
                    Let's build something meaningful.
                </span>

                <h2>
                    Building something great?
                    <br />
                    <strong>Let's make sure the world knows about it.</strong>
                </h2>

                <a
                    href="/contact"
                    className="construction-cta__button"
                >
                    Start a Construction Mandate
                    <span>→</span>
                </a>
            </div>
        </section>
    );
}

export default ConstructionCTA;

