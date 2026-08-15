
import { useEffect, useState } from "react";
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
    const [visiblePartners, setVisiblePartners] = useState(() =>
        partners.slice(0, 3)
    );

    const [isSliding, setIsSliding] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsSliding(true);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!isSliding) return;

        const timer = setTimeout(() => {
            setVisiblePartners((current) => {

                const currentNames = current.map(
                    (partner) => partner.name
                );

                const nextPartner =
                    partners.find(
                        (partner) =>
                            !currentNames.includes(partner.name)
                    );

                if (!nextPartner) {
                    return current;
                }

                return [
                    current[1],
                    current[2],
                    nextPartner,
                ];
            });

            setIsSliding(false);
        }, 900);

        return () => clearTimeout(timer);
    }, [isSliding]);

    return (
        <section className="bloomtown-partners">

            {/* HEADER */}

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


            {/* CAROUSEL */}

            <div className="bloomtown-partners__viewport">

                <div
                    className={`bloomtown-partners__track ${
                        isSliding
                            ? "bloomtown-partners__track--sliding"
                            : ""
                    }`}
                >

                    {visiblePartners.map(
                        (partner, index) => (

                            <article
                                className={`bloomtown-partners__card ${
                                    index === 1
                                        ? "bloomtown-partners__card--center"
                                        : ""
                                }`}
                                key={partner.name}
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

                        )
                    )}

                </div>

            </div>

        </section>
    );
}

export default Bloompartner;