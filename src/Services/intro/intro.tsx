
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
                        A Lead Engine.
                        <span> Five Supporting Pillars.</span>
                    </h2>

                    <p>
                        From broadcast studios to server rooms, from farmlands
                        to construction sites, from renewable energy boardrooms
                        to youth training halls — Eleven 11 Consult operates
                        wherever precision expertise and unified vision are
                        needed most.
                    </p>

                    <p>
                        We organise our services around a Lead Engine and five
                        Supporting Pillars — each sector-specialist, each
                        connected.
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

