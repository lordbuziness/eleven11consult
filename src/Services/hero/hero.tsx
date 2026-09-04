import "./hero.css";
import heroImage from "../assets/images/serviceoverviewhero.jpg";

function ServicesHero() {
    return (
        <section className="services-hero">
            <img
                className="services-hero__image"
                src={heroImage}
                alt="Eleven 11 Consult services"
            />

            <div className="services-hero__overlay" />

            <div className="services-hero__content">
                <span className="services-hero__eyebrow">
                    Our Services
                </span>

                <h1>
                    Ideas into
                    <br />
                    <span>impact.</span>
                </h1>

                <p>
                    Strategy, communication, technology, and industry
                    expertise working together to help organizations build
                    what matters.
                </p>
            </div>
        </section>
    );
}

export default ServicesHero;