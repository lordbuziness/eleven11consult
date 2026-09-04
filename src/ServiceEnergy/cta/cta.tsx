import "./cta.css";

function EnergyCTA() {
    return (
        <section className="energy-cta">
            <div className="energy-cta__content">
                <span>
                    Let's power something meaningful.
                </span>

                <h2>
                    Have an energy
                    <br />
                    <strong>idea to build?</strong>
                </h2>

                <p>
                    Let's explore how strategy, communication, technology,
                    and storytelling can help turn your energy project into
                    lasting impact.
                </p>

                <a
                    href="/contact"
                    className="energy-cta__button"
                >
                    Start a conversation
                    <span>→</span>
                </a>
            </div>
        </section>
    );
}

export default EnergyCTA;