import "./cta.css";

function MediaCTA() {
    return (
        <section className="media-cta">
            <div className="media-cta__content">
                <span>
                    Let's tell a better story.
                </span>

                <h2>
                    Have an idea
                    <br />
                    <strong>worth sharing?</strong>
                </h2>

                <p>
                    Let's explore how strategy, creativity, media, and
                    storytelling can turn your idea into something people
                    notice, understand, and remember.
                </p>

                <a
                    href="/contact"
                    className="media-cta__button"
                >
                    Start a conversation
                    <span>→</span>
                </a>
            </div>
        </section>
    );
}

export default MediaCTA;