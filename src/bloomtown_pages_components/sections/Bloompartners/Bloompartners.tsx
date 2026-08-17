
import "./Bloompartners.css";

import logo1 from "../../../assets/images/logo1.svg";
import logo2 from "../../../assets/images/logo2.svg";
import logo3 from "../../../assets/images/logo3.svg";
import logo4 from "../../../assets/images/logo4.svg";
import logo5 from "../../../assets/images/logo5.svg";
import logo6 from "../../../assets/images/logo6.svg";

const partners = [
    {
        name: "GTBank",
        logo: logo1,
    },
    {
        name: "MTN",
        logo: logo2,
    },
    {
        name: "Dangote",
        logo: logo3,
    },
    {
        name: "Google",
        logo: logo4,
    },
    {
        name: "Microsoft",
        logo: logo5,
    },
    {
        name: "Nestlé",
        logo: logo6,
    },
];

function Bloompartner() {
    /*
     * Duplicate the partners so the conveyor can
     * continuously move without a visible reset.
     */
    const conveyorPartners = [...partners, ...partners];

    return (
        <section className="bloomtown-partners">

            {/* =========================================
                HEADER
            ========================================= */}

            <div className="bloomtown-partners__header">

                <span className="bloomtown-partners__eyebrow">
                    OUR PARTNERS & SPONSORS
                </span>

                <h2 className="bloomtown-partners__title">
                    Growing Together,
                    <br />
                    <em>Building Tomorrow</em>
                </h2>

                <p className="bloomtown-partners__intro">
                    Trusted by leading organizations committed to
                    youth development.
                </p>

            </div>


            {/* =========================================
                INFINITE CONVEYOR
            ========================================= */}

            <div className="bloomtown-partners__viewport">

                <div className="bloomtown-partners__track">

                    {conveyorPartners.map((partner, index) => (

                        <article
                            className="bloomtown-partners__card"
                            key={`${partner.name}-${index}`}
                        >

                            <div className="bloomtown-partners__card-inner">

                                <div className="bloomtown-partners__logo-circle">

                                    <img
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                    />

                                </div>

                                <span className="bloomtown-partners__partner-name">
                                    {partner.name}
                                </span>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Bloompartner;

