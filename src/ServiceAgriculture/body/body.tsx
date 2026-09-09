
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
                        Unlocking Nigeria's
                        <span> agricultural potential.</span>
                    </h2>

                    <p>
                        Agriculture remains the backbone of Nigeria's economy
                        — yet its potential remains vastly underutilised.
                        Eleven 11 Consult bridges the gap between traditional
                        farming systems, modern agrotech solutions, and the
                        communication strategies needed to attract investment,
                        build markets, and drive impact.
                    </p>

                    <p>
                        <strong>Our Agriculture Services:</strong>
                    </p>

                    <p>
                        <strong>Agrotech Consultancy</strong> Advisory on the
                        adoption and integration of agricultural technology —
                        from precision farming and data-driven crop management
                        to agri-fintech and supply chain digitisation.
                    </p>

                    <p>
                        <strong>Value-Chain Communication</strong> Strategic
                        communications that connect producers, processors,
                        distributors, and consumers — building the market
                        linkages that unlock commercial agricultural value.
                    </p>

                    <p>
                        <strong>Agribusiness Strategy</strong> Business
                        development advisory for agricultural enterprises,
                        cooperatives, and investors looking to enter or scale
                        within Nigeria's food and farming ecosystem.
                    </p>

                    <p>
                        <strong>Sector Media & Storytelling</strong>{" "}
                        Documentary and digital content that positions
                        agricultural projects, reforms, and innovations in
                        front of the audiences that matter most.
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

