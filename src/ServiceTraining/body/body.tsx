
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
                    We build the
                    <br />
                    people who
                    <br />
                    build the future.
                </h2>

                <p>
                    Strategies succeed when people are equipped to execute
                    them. At Eleven 11 Consult, we believe that human capital
                    is the most critical infrastructure any organisation — or
                    nation — can invest in.
                </p>

                <p>
                    Our Training & Development pillar delivers bespoke
                    programmes for corporate professionals, industry
                    practitioners, and the next generation of African leaders.
                </p>

                <div className="training-body__services">
                    <h3>Our Training Services</h3>

                    <article className="training-body__service">
                        <span className="training-body__service-number">
                            01
                        </span>

                        <div>
                            <h4>Corporate Training Programmes</h4>

                            <p>
                                Tailored professional development workshops and
                                training series covering media literacy,
                                communications strategy, digital skills,
                                leadership, and sector-specific competencies.
                            </p>
                        </div>
                    </article>

                    <article className="training-body__service">
                        <span className="training-body__service-number">
                            02
                        </span>

                        <div>
                            <h4>Industry Skills Development</h4>

                            <p>
                                Practical, industry-focused training in media
                                production, broadcast journalism, energy
                                management, agricultural enterprise,
                                construction project management, and IT
                                operations.
                            </p>
                        </div>
                    </article>

                    <article className="training-body__service">
                        <span className="training-body__service-number">
                            03
                        </span>

                        <div>
                            <h4>Youth Development — The Heritage Camp</h4>

                            <p>
                                Our flagship youth initiative — designed to
                                equip young Nigerians with the leadership,
                                cultural grounding, and professional skills
                                they need to navigate and shape the modern
                                African economy.
                            </p>
                        </div>
                    </article>

                    <article className="training-body__service">
                        <span className="training-body__service-number">
                            04
                        </span>

                        <div>
                            <h4>Facilitation & Consultancy</h4>

                            <p>
                                Design and delivery of customised training
                                frameworks for organisations building internal
                                capacity at scale.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default TrainingBody;

