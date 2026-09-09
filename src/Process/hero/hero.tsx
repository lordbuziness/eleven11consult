
import "./hero.css";
import heroImage from "../assests/images/ourprocesshero..jpg";

function ProcessHero() {
    return (
        <section className="process-hero">
            <div className="process-hero__content">
                <div className="process-hero__text">
                    <span className="process-hero__eyebrow">
                        Our Process
                    </span>

                    <h1>
                        Our
                        <br />
                        <span>Process</span>
                    </h1>

                    <p>
                        Strategy built on clarity. Execution built on trust.
                    </p>
                </div>

                <div className="process-hero__image">
                    <img
                        src={heroImage}
                        alt="Eleven 11 Consult process"
                    />
                </div>
            </div>
        </section>
    );
}

export default ProcessHero;

