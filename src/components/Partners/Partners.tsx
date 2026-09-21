import "./Partners.css";

import flourMills from "../../assets/images/Flour-Mills.png";
import blueworld from "../../assets/images/blueworld.png";
import vivon from "../../assets/images/Vivon.jpg";
import privida from "../../assets/images/privida-logo.png";
import henryMontego from "../../assets/images/Henry-Montego.jpg";
import starlinkGlobal from "../../assets/images/starlinkglobalng.svg";
import crmi from "../../assets/images/crmi-logo.png";

interface Partner {
    logo: string;
    name: string;
}

const partners: Partner[] = [
    {
        logo: flourMills,
        name: "Flour Mills of Nigeria",
    },
    {
        logo: blueworld,
        name: "Blueworld Cosmetics",
    },
    {
        logo: vivon,
        name: "VIVON",
    },
    {
        logo: privida,
        name: "PriVida Energy",
    },
    {
        logo: henryMontego,
        name: "Henry Montego",
    },
    {
        logo: starlinkGlobal,
        name: "STARLINK GLOBAL",
    },
    {
        logo: crmi,
        name: "CRMING",
    },
];

function Partners() {
    const scrollingPartners = [...partners, ...partners];

    return (
        <section className="partners">
            <div className="partners__container">
                <div className="partners__header">
                    <span>Our Partners</span>

                    <h2>Trusted by Industry Leaders</h2>

                    <p>
                        We collaborate with organisations at the forefront
                        of Africa's economic and cultural landscape.
                    </p>
                </div>

                <div className="partners__marquee">
                    <div className="partners__track">
                        {scrollingPartners.map((partner, index) => (
                            <div
                                className="partners__card"
                                key={`${partner.name}-${index}`}
                            >
                                <div className="partners__logo">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                    />
                                </div>

                                <span className="partners__name">
                                    {partner.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partners;
