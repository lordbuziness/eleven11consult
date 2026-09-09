
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
                    Our
                    <br />
                    <span>Services</span>
                </h1>

                <p>
                    A Full-Spectrum Consultancy for Africa's Most Dynamic
                    Industries
                </p>
            </div>
        </section>
    );
}

export default ServicesHero;

