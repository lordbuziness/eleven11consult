
import "./hero.css";
import heroImage from "../assets/images/servictechhero.jpg";

function TechnologyHero() {
    return (
        <section className="technology-hero">
            <img
                className="technology-hero__image"
                src={heroImage}
                alt="Technology and digital innovation"
            />

            <div className="technology-hero__overlay" />

            <div className="technology-hero__content">
                <span className="technology-hero__eyebrow">
                    Technology
                </span>

                <h1>
                    Technology
                    <br />
                    <span>Solutions</span>
                </h1>

                <p>
                    The digital infrastructure your business deserves
                </p>
            </div>
        </section>
    );
}

export default TechnologyHero;

