
import "./cta.css";

function EnergyCTA() {
    return (
        <section className="energy-cta">
            <div className="energy-cta__content">
                <span>
                    Energy & Climate Advisory
                </span>

                <h2>
                    Navigate the energy
                    <br />
                    <strong>transition with confidence.</strong>
                </h2>

                <p>
                    Navigate the energy transition with a partner who
                    understands both the strategy and the story.
                </p>

                <a
                    href="/contact"
                    className="energy-cta__button"
                >
                    Begin a Conversation
                    <span>→</span>
                </a>
            </div>
        </section>
    );
}

export default EnergyCTA;

