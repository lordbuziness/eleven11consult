import "./cta.css";

function AgricultureCTA() {
    return (
        <section className="agriculture-cta">
            <div className="agriculture-cta__content">
                <span>Let's grow something meaningful.</span>

                <h2>
                    Have an agricultural
                    <br />
                    <strong>idea to build?</strong>
                </h2>

                <p>
                    Let's explore how strategy, technology, communication,
                    and storytelling can turn it into impact.
                </p>

                <a href="/contact" className="agriculture-cta__button">
                    Start a conversation
                    <span>→</span>
                </a>
            </div>
        </section>
    );
}

export default AgricultureCTA;