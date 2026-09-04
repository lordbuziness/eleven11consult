import "./body.css";
import bodyImage from "../assets/images/service energy1.jpg";

function EnergyBody() {
    return (
        <section className="energy-body">
            <div className="energy-body__label">
                <span>01</span>
                <span>What We Do</span>
            </div>

            <div className="energy-body__content">
                <div className="energy-body__text">
                    <h2>
                        Building a stronger
                        <span> energy future.</span>
                    </h2>

                    <p>
                        Energy is at the heart of economic growth and
                        development. From generation and distribution to
                        renewable technologies and emerging solutions, the
                        sector is constantly evolving.
                    </p>

                    <p>
                        We help energy organizations make sense of this
                        changing landscape, communicate complex ideas clearly,
                        strengthen their positioning, and connect their work
                        with the people and markets that matter.
                    </p>
                </div>

                <div className="energy-body__image">
                    <img
                        src={bodyImage}
                        alt="Energy project and infrastructure"
                    />
                </div>
            </div>
        </section>
    );
}

export default EnergyBody;