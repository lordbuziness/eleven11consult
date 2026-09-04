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
                    Building people
                    <br />
                    who build the future.
                </h1>

                <p className="training-hero__description">
                    Practical learning, professional development, and capacity
                    building designed to create lasting impact.
                </p>
            </div>
        </section>
    );
}

export default TrainingHero;