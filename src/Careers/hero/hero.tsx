import "./hero.css";
import heroImage from "../assets/images/careers hero.jpg";

function CareersHero() {
    return (
        <section className="careers-hero">
            <img
                className="careers-hero__image"
                src={heroImage}
                alt="Careers at Eleven 11 Consult"
            />

            <div className="careers-hero__overlay" />

            <div className="careers-hero__content">
                <span className="careers-hero__eyebrow">
                    Careers
                </span>

                <h1>
                    Build with
                    <br />
                    <span>purpose.</span>
                </h1>

                <p>
                    We are always looking for thoughtful people who want to
                    create meaningful work and make an impact.
                </p>
            </div>
        </section>
    );
}

export default CareersHero;