import "./hero.css";
import heroImage from "../assets/images/servicemediahero.jpg";

function MediaHero() {
    return (
        <section className="media-hero">
            <img
                className="media-hero__image"
                src={heroImage}
                alt="Media and communications"
            />

            <div className="media-hero__overlay" />

            <div className="media-hero__content">
                <span className="media-hero__eyebrow">
                    Media & Communications
                </span>

                <h1>
                    Turning ideas
                    <br />
                    <span>into influence.</span>
                </h1>

                <p>
                    We help organizations communicate their ideas, strengthen
                    their presence, and tell stories that connect with the
                    people who matter.
                </p>
            </div>
        </section>
    );
}

export default MediaHero;
