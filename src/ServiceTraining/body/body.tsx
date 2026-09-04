import "./body.css";
import bodyImage from "../assets/images/servicetraining1.jpg";

function TrainingBody() {
    return (
        <section className="training-body">
            <div className="training-body__image">
                <img
                    src={bodyImage}
                    alt="Professionals participating in a training session"
                />
            </div>

            <div className="training-body__content">
                <p className="training-body__eyebrow">
                    Learning that creates capability
                </p>

                <h2>
                    We don't just
                    <br />
                    train people.
                    <br />
                    We build capability.
                </h2>

                <p>
                    Our training programmes are designed to turn knowledge
                    into practical skills. We work with organisations,
                    professionals, and emerging leaders to develop the
                    capabilities they need to perform, adapt, and create
                    meaningful impact.
                </p>

                <p>
                    From professional development to specialised capacity
                    building, we create learning experiences that are
                    practical, relevant, and built around real-world needs.
                </p>
            </div>
        </section>
    );
}

export default TrainingBody;