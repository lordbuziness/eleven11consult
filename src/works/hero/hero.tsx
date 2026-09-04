import "./hero.css";
import heroImage from "../assets/images/work hero.jpg";

function WorksHero() {
    return (
        <section className="works-hero">
            <img
                className="works-hero__image"
                src={heroImage}
                alt="Eleven 11 Consult selected work"
            />

            <div className="works-hero__overlay" />

            <div className="works-hero__content">
                <span className="works-hero__eyebrow">
                    Selected Works
                </span>

                <h1>
                    Work that
                    <br />
                    <span>moves things forward.</span>
                </h1>

                <p>
                    A selection of projects, partnerships, and ideas we have
                    helped bring to life.
                </p>
            </div>
        </section>
    );
}

export default WorksHero;