import "./hero.css";
import heroImage from "../assets/images/serviceconstructhero.jpg";

function ConstructionHero() {
    return (
        <section className="construction-hero">
            <img
                className="construction-hero__image"
                src={heroImage}
                alt="Construction and infrastructure"
            />

            <div className="construction-hero__overlay" />

            <div className="construction-hero__content">
                <span className="construction-hero__eyebrow">
                    Construction
                </span>

                <h1>
                    Building ideas
                    <br />
                    <span>into reality.</span>
                </h1>

                <p>
                    We help construction businesses and infrastructure
                    organizations communicate their value, strengthen their
                    strategy, and bring ambitious projects to life.
                </p>
            </div>
        </section>
    );
}

export default ConstructionHero;