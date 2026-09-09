
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
                        Building Nigeria's
                        <span> physical future.</span>
                    </h2>

                    <p>
                        Infrastructure is the foundation of every thriving
                        economy. At Eleven 11 Consult, we support the
                        organisations building Nigeria's physical future —
                        from residential and commercial developers to civil
                        contractors and infrastructure investors — with the
                        strategic and communications expertise to match their
                        ambition.
                    </p>

                    <p>
                        <strong>
                            Our Construction & Real Estate Services:
                        </strong>
                    </p>

                    <p>
                        <strong>Project Management Consultancy</strong>{" "}
                        End-to-end strategic oversight and advisory for
                        construction and real estate projects — ensuring
                        timely delivery, budget alignment, and stakeholder
                        confidence.
                    </p>

                    <p>
                        <strong>Infrastructure Media</strong> Documentary,
                        video, and digital content that showcases your
                        projects, builds your brand, and tells the story of
                        what you're building — and why it matters.
                    </p>

                    <p>
                        <strong>Real Estate Communications & PR</strong>{" "}
                        Strategic communications for property developers, real
                        estate investment trusts (REITs), and housing
                        developers looking to position their projects with
                        authority.
                    </p>

                    <p>
                        <strong>Stakeholder & Community Engagement</strong>{" "}
                        Communications strategy for managing community
                        relations, government engagement, and public perception
                        around major infrastructure projects.
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

