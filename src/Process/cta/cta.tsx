
import "./cta.css";

function MediaCTA() {
    return (
        <section className="media-cta">
            <div className="media-cta__content">
                <span>
                    Start a Media Project
                </span>

                <h2>
                    Let's tell your story
                    <br />
                    <strong>the right way.</strong>
                </h2>

                <a
                    href="/contact"
                    className="media-cta__button"
                >
                    Start a Media Project
                    <span>→</span>
                </a>
            </div>
        </section>
    );
}

export default MediaCTA;

