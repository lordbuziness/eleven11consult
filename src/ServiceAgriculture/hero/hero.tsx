
import "./hero.css";
import heroImage from "../assets/images/serviceagrichero1.jpg";

function AgricultureHero() {
    return (
        <section className="agriculture-hero">
            <img
                className="agriculture-hero__image"
                src={heroImage}
                alt="Agriculture and agribusiness"
            />

            <div className="agriculture-hero__overlay" />

            <div className="agriculture-hero__content">
                <span className="agriculture-hero__eyebrow">
                    Agriculture & Agrotech
                </span>

                <h1>
                    Agriculture &
                    <br />
                    <span>Agrotech Consultancy</span>
                </h1>

                <p>
                    Unlocking Nigeria's most powerful and underutilised
                    sector.
                </p>
            </div>
        </section>
    );
}

export default AgricultureHero;

