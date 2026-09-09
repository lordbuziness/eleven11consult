
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
                    Media &
                    <br />
                    <span>Communications</span>
                </h1>

                <p>
                    We craft narratives with authority. We produce stories
                    with purpose.
                </p>
            </div>
        </section>
    );
}

export default MediaHero;

