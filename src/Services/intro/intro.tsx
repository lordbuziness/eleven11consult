import "./intro.css";
import introImage from "../assets/images/servicesoverview1.jpg";

function ServicesIntro() {
    return (
        <section className="services-intro">
            <div className="services-intro__label">
                <span>01</span>
                <span>How We Help</span>
            </div>

            <div className="services-intro__content">
                <div className="services-intro__text">
                    <h2>
                        One lead engine.
                        <span> Five supporting pillars.</span>
                    </h2>

                    <p>
                        We believe meaningful impact rarely comes from one
                        discipline working alone. The strongest ideas emerge
                        when strategy, communication, technology, and
                        industry expertise work together.
                    </p>

                    <p>
                        Our services are built around this approach. We bring
                        together the capabilities organizations need to
                        understand challenges, communicate ideas, build
                        solutions, and create sustainable growth.
                    </p>
                </div>

                <div className="services-intro__image">
                    <img
                        src={introImage}
                        alt="Professionals collaborating on strategy"
                    />
                </div>
            </div>
        </section>
    );
}

export default ServicesIntro;