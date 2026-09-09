
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
                    Energy & Climate
                </span>

                <h1>
                    Energy &
                    <br />
                    <span>Climate Advisory</span>
                </h1>

                <p>
                    Powering Africa's sustainable future —
                    strategically and narratively.
                </p>
            </div>
        </section>
    );
}

export default EnergyHero;

