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
                    Agriculture
                </span>

                <h1>
                    Growing ideas
                    <br />
                    <span>into impact.</span>
                </h1>

                <p>
                    We help agriculture businesses and organizations
                    communicate, strategize, and build for a more productive
                    and sustainable future.
                </p>
            </div>
        </section>
    );
}

export default AgricultureHero;