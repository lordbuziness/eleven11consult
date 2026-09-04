import "./hero.css";
import heroImage from "../assets/images/serviceenergyhero.jpg";

function EnergyHero() {
    return (
        <section className="energy-hero">
            <img
                className="energy-hero__image"
                src={heroImage}
                alt="Energy infrastructure and renewable energy"
            />

            <div className="energy-hero__overlay" />

            <div className="energy-hero__content">
                <span className="energy-hero__eyebrow">
                    Energy
                </span>

                <h1>
                    Powering ideas
                    <br />
                    <span>into impact.</span>
                </h1>

                <p>
                    We help energy businesses and organizations communicate
                    their value, strengthen their strategy, and navigate a
                    rapidly changing energy landscape.
                </p>
            </div>
        </section>
    );
}

export default EnergyHero;