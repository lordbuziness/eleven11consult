
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
                    Join the
                    <br />
                    <span>Eleven 11 Team</span>
                </h1>

                <p>
                    We're building a team as diverse as the sectors we serve.
                </p>
            </div>
        </section>
    );
}

export default CareersHero;

