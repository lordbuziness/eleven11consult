import "./body.css";
import bodyImage from "../assets/images/servicetech1.jpg";

function TechnologyBody() {
    return (
        <section className="technology-body">
            <div className="technology-body__label">
                <span>01</span>
                <span>What We Do</span>
            </div>

            <div className="technology-body__content">
                <div className="technology-body__text">
                    <h2>
                        Technology that
                        <span> solves real problems.</span>
                    </h2>

                    <p>
                        Technology should do more than look impressive. It
                        should make work easier, create new opportunities, and
                        help organizations respond to the challenges around
                        them.
                    </p>

                    <p>
                        We work with organizations to understand their needs,
                        identify opportunities for digital transformation, and
                        develop practical technology strategies and solutions
                        that create measurable value.
                    </p>
                </div>

                <div className="technology-body__image">
                    <img
                        src={bodyImage}
                        alt="Technology professionals collaborating"
                    />
                </div>
            </div>
        </section>
    );
}

export default TechnologyBody;