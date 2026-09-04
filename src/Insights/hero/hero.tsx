import "./hero.css";
import heroImage from "../assets/images/insighthero.jpg";

function InsightsHero() {
    return (
        <section className="insights-hero">
            <img
                className="insights-hero__image"
                src={heroImage}
                alt="Eleven 11 Consult insights"
            />

            <div className="insights-hero__overlay" />

            <div className="insights-hero__content">
                <span className="insights-hero__eyebrow">
                    Insights
                </span>

                <h1>
                    Ideas that
                    <br />
                    <span>move business forward.</span>
                </h1>

                <p>
                    Perspectives, ideas, and practical insights on
                    business, technology, creativity, and the industries
                    shaping tomorrow.
                </p>
            </div>
        </section>
    );
}

export default InsightsHero;