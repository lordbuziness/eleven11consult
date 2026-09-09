
import "./hero.css";
import heroImage from "../assets/images/servicetraininghero.jpg";

function TrainingHero() {
    return (
        <section className="training-hero">
            <div
                className="training-hero__background"
                style={{ backgroundImage: `url(${heroImage})` }}
            />

            <div className="training-hero__overlay" />

            <div className="training-hero__content">
                <p className="training-hero__eyebrow">
                    Training & Capacity Building
                </p>

                <h1>
                    Training &
                    <br />
                    <span>Development</span>
                </h1>

                <p className="training-hero__description">
                    Investing in the human capital that drives tomorrow's
                    Africa.
                </p>
            </div>
        </section>
    );
}

export default TrainingHero;

