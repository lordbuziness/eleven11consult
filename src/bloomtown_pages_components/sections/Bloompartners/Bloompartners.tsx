
import "./Bloompartners.css";

import gtBank from "../../asset/images/GTBank.jpeg"
import mtn from "../../asset/images/Mtn.jpeg";
import dangote from "../../asset/images/dangotelogo.png";
import google from "../../../assets/images/logo2google.svg";
import microsoft from "../../../assets/images/logo4microsoft.svg";
import nestle from "../../asset/images/nestle.png";

const partners = [
    {
        name: "GTBank",
        logo: gtBank,
    },
    {
        name: "MTN",
        logo: mtn,
    },
    {
        name: "Dangote",
        logo: dangote,
    },
    {
        name: "Google",
        logo: google,
    },
    {
        name: "Microsoft",
        logo: microsoft,
    },
    {
        name: "Nestlé",
        logo: nestle,
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

