
import "./Partners.css";

import logo1 from "../../assets/images/logo1.svg";
import logo2 from "../../assets/images/logo2.svg";
import logo3 from "../../assets/images/logo3.svg";
import logo4 from "../../assets/images/logo4.svg";
import logo5 from "../../assets/images/logo5.svg";
import logo6 from "../../assets/images/logo6.svg";
import logo7 from "../../assets/images/logo7.svg";
import logo8 from "../../assets/images/logo8.svg";
import logo9 from "../../assets/images/logo9.svg";

interface Partner {
    logo: string;
    name: string;
}

const partners: Partner[] = [
    {
        logo: logo1,
        name: "Partner 1",
    },
    {
        logo: logo2,
        name: "Partner 2",
    },
    {
        logo: logo3,
        name: "Partner 3",
    },
    {
        logo: logo4,
        name: "Partner 4",
    },
    {
        logo: logo5,
        name: "Partner 5",
    },
    {
        logo: logo6,
        name: "Partner 6",
    },
    {
        logo: logo7,
        name: "Partner 7",
    },
    {
        logo: logo8,
        name: "Partner 8",
    },
    {
        logo: logo9,
        name: "Partner 9",
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partners;

