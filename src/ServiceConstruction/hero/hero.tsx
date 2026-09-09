
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
                    Construction & Real Estate
                </span>

                <h1>
                    Construction &
                    <br />
                    <span>Real Estate</span>
                </h1>

                <p>
                    Building with purpose. Managing with precision.
                    Communicating with clarity.
                </p>
            </div>
        </section>
    );
}

export default ConstructionHero;

