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
                    Building what
                    <br />
                    <span>comes next.</span>
                </h1>

                <p>
                    We help organizations use technology to solve problems,
                    improve how they work, and turn ambitious ideas into
                    practical digital solutions.
                </p>
            </div>
        </section>
    );
}

export default TechnologyHero;