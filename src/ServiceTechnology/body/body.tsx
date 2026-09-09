
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
                        <span> drives your advantage.</span>
                    </h2>

                    <p>
                        In today's economy, technology is not a support
                        function — it is a competitive advantage. Eleven 11
                        Consult's Technology Solutions pillar delivers the
                        software, infrastructure, and managed services that
                        enable African enterprises to operate efficiently,
                        scale intelligently, and compete globally.
                    </p>

                    <p>
                        Whether you are building a product from scratch,
                        modernising your IT environment, or outsourcing your
                        technology operations to a trusted partner — we bring
                        the expertise to deliver.
                    </p>

                    <div className="technology-body__services">
                        <h3>Our Technology Services</h3>

                        <article className="technology-body__service">
                            <span className="technology-body__service-number">
                                01
                            </span>

                            <div>
                                <h4>Software Development</h4>

                                <p>
                                    Custom software solutions built for your
                                    specific business requirements. From
                                    enterprise platforms and web applications
                                    to mobile apps and internal management
                                    systems — we design, build, and deploy with
                                    precision and scalability in mind.
                                </p>

                                <div className="technology-body__approach">
                                    <span>Our approach</span>

                                    <p>
                                        Requirements discovery → Architecture
                                        design → Agile development → Testing &
                                        QA → Deployment → Ongoing support.
                                    </p>
                                </div>
                            </div>
                        </article>

                        <article className="technology-body__service">
                            <span className="technology-body__service-number">
                                02
                            </span>

                            <div>
                                <h4>IT Infrastructure Development</h4>

                                <p>
                                    Design, planning, and implementation of
                                    enterprise IT infrastructure — including
                                    network architecture, server deployment,
                                    cloud migration, data centre strategy, and
                                    cybersecurity frameworks.
                                </p>

                                <p>
                                    We help organisations build robust, secure,
                                    and scalable technology foundations that
                                    support long-term business growth.
                                </p>
                            </div>
                        </article>

                        <article className="technology-body__service">
                            <span className="technology-body__service-number">
                                03
                            </span>

                            <div>
                                <h4>
                                    Outsourced Managed IT Support & Services
                                </h4>

                                <p>
                                    Focus on your core business while we manage
                                    your technology. Our managed IT services
                                    include:
                                </p>

                                <ul>
                                    <li>
                                        24/7 helpdesk and technical support
                                    </li>
                                    <li>
                                        Network monitoring and maintenance
                                    </li>
                                    <li>
                                        Cybersecurity management and threat
                                        response
                                    </li>
                                    <li>
                                        Cloud infrastructure management
                                    </li>
                                    <li>
                                        IT asset management and procurement
                                        advisory
                                    </li>
                                    <li>
                                        Disaster recovery and business
                                        continuity planning
                                    </li>
                                </ul>

                                <p>
                                    Flexible service agreements designed for
                                    businesses of all sizes — from growing
                                    SMEs to large enterprises.
                                </p>
                            </div>
                        </article>
                    </div>
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

