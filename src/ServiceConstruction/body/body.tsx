import "./body.css";
import bodyImage from "../assets/images/serviceconstruct1.jpg";

function ConstructionBody() {
    return (
        <section className="construction-body">
            <div className="construction-body__label">
                <span>01</span>
                <span>What We Do</span>
            </div>

            <div className="construction-body__content">
                <div className="construction-body__text">
                    <h2>
                        Building a stronger
                        <span> built environment.</span>
                    </h2>

                    <p>
                        Construction is where strategy becomes physical
                        reality. Every project depends on strong planning,
                        clear communication, capable teams, and the ability to
                        connect ideas with the people who make them happen.
                    </p>

                    <p>
                        We work with construction companies and infrastructure
                        organizations to strengthen their positioning,
                        communicate complex projects, and create strategies
                        that support sustainable growth.
                    </p>
                </div>

                <div className="construction-body__image">
                    <img
                        src={bodyImage}
                        alt="Construction project"
                    />
                </div>
            </div>
        </section>
    );
}

export default ConstructionBody;