import "./body.css";
import bodyImage from "../assets/images/serviceagricbody1.jpg";

function AgricultureBody() {
    return (
        <section className="agriculture-body">
            <div className="agriculture-body__label">
                <span>01</span>
                <span>What We Do</span>
            </div>

            <div className="agriculture-body__content">
                <div className="agriculture-body__text">
                    <h2>
                        Building a stronger
                        <span> agricultural future.</span>
                    </h2>

                    <p>
                        Agriculture is more than production. It is a network
                        of people, businesses, technologies, markets, and
                        communities working together.
                    </p>

                    <p>
                        We work across this ecosystem to help organizations
                        develop stronger strategies, communicate their value,
                        adopt new ideas, and tell stories that create
                        meaningful connections.
                    </p>
                </div>

                <div className="agriculture-body__image">
                    <img
                        src={bodyImage}
                        alt="Agricultural production"
                    />
                </div>
            </div>
        </section>
    );
}

export default AgricultureBody;