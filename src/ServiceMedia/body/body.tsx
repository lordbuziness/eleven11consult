
import "./body.css";
import bodyImage from "../assets/images/servicemedia1.jpg";

function MediaBody() {
    return (
        <section className="media-body">
            <div className="media-body__label">
                <span>01</span>
                <span>What We Do</span>
            </div>

            <div className="media-body__content">
                <div className="media-body__text">
                    <h2>
                        Media is our
                        <span> foundation.</span>
                    </h2>

                    <p>
                        In a world saturated with content, the brands and
                        organisations that win are those with the clearest,
                        most compelling voice. At Eleven 11 Consult, media is
                        not just one of our services — it is our foundation.
                    </p>

                    <p>
                        Led by Krisilems, our media arm brings broadcast-level
                        expertise to every communications mandate, combining
                        journalistic rigour with strategic intent.
                    </p>

                    <p>
                        <strong>Our Media Services:</strong>
                    </p>

                    <p>
                        <strong>Broadcast Production</strong> High-end TV
                        concepts, documentary production, and editorial series
                        — including flagship productions such as Homes and
                        Havens and The Blueprint. We develop, produce, and
                        distribute content that commands attention.
                    </p>

                    <p>
                        <strong>Reportorial Strategy</strong> Expert news
                        scripting, investigative features, editorial
                        consultancy, and narrative strategy for organisations
                        that need to communicate with precision and credibility.
                    </p>

                    <p>
                        <strong>
                            Digital Innovation & Content Development
                        </strong>{" "}
                        Content strategy and production for digital platforms,
                        including BusstopTV and AI-integrated media workflows.
                        We help organisations stay relevant in the digital
                        media landscape.
                    </p>

                    <p>
                        <strong>
                            Public Relations & Corporate Positioning
                        </strong>{" "}
                        High-stakes corporate image management, stakeholder
                        communications, media relations, and strategic PR for
                        businesses navigating visibility, reputation, and
                        public trust.
                    </p>
                </div>

                <div className="media-body__image">
                    <img
                        src={bodyImage}
                        alt="Media and communications team"
                    />
                </div>
            </div>
        </section>
    );
}

export default MediaBody;

