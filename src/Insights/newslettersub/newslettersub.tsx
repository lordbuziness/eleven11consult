import "./newslettersub.css";

function NewsletterSub() {
    return (
        <section className="newsletter-sub">
            <div className="newsletter-sub__content">
                <span className="newsletter-sub__eyebrow">
                    Stay Informed
                </span>

                <h2>
                    Ideas worth
                    <span> knowing.</span>
                </h2>

                <p>
                    Get our latest insights, perspectives, and industry
                    stories delivered straight to your inbox.
                </p>

                <form className="newsletter-sub__form">
                    <input
                        type="email"
                        placeholder="Your email address"
                        aria-label="Email address"
                        required
                    />

                    <button type="submit">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}

export default NewsletterSub;