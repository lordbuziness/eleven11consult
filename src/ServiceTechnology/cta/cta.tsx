import "./cta.css";

function TechnologyCTA() {
    return (
        <section className="technology-cta">
            <div className="technology-cta__content">
                <span>
                    Let's build what's next.
                </span>

                <h2>
                    Have a technology
                    <br />
                    <strong>idea to build?</strong>
                </h2>

                <p>
                    Let's explore how strategy, technology, and innovation can
                    turn your idea into a practical solution with real-world
                    impact.
                </p>

                <a
                    href="/contact"
                    className="technology-cta__button"
                >
                    Start a conversation
                    <span>→</span>
                </a>
            </div>
        </section>
    );
}

export default TechnologyCTA;