import "./cta.css";

function ConstructionCTA() {
    return (
        <section className="construction-cta">
            <div className="construction-cta__content">
                <span>
                    Let's build something meaningful.
                </span>

                <h2>
                    Have a construction
                    <br />
                    <strong>idea to build?</strong>
                </h2>

                <p>
                    Let's explore how strategy, communication, and
                    storytelling can help turn your project into lasting
                    impact.
                </p>

                <a
                    href="/contact"
                    className="construction-cta__button"
                >
                    Start a conversation
                    <span>→</span>
                </a>
            </div>
        </section>
    );
}

export default ConstructionCTA;