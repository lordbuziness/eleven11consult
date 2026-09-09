
import "./cta.css";

function AgricultureCTA() {
    return (
        <section className="agriculture-cta">
            <div className="agriculture-cta__content">
                <span>Let's grow something meaningful.</span>

                <h2>
                    Let's grow something
                    <br />
                    <strong>significant together.</strong>
                </h2>

                <a href="/contact" className="agriculture-cta__button">
                    Discuss Your Agricultural Project
                    <span>→</span>
                </a>
            </div>
        </section>
    );
}

export default AgricultureCTA;

