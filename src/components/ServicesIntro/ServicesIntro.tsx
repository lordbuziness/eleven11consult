
import "./ServicesIntro.css";
import {
    Megaphone,
    Cpu,
    BriefcaseBusiness,
} from "lucide-react";
import { Link } from "react-router-dom";

interface Service {
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
}

const services: Service[] = [
    {
        title: "Media & Communications",
        description:
            "We craft the narratives that position brands and sectors with authority — from high-end broadcast production to AI-integrated digital content strategy.",
        icon: <Megaphone />,
        link: "/services/media",
    },
    {
        title: "Technology Solutions",
        description:
            "From custom software and IT infrastructure to outsourced managed support, we deliver the digital backbone your enterprise needs to grow and scale.",
        icon: <Cpu />,
        link: "/services/technology",
    },
    {
        title: "Industry Consulting",
        description:
            "Strategic advisory across Energy, Agriculture, Construction, and Climate — grounded in decades of field expertise and real-world execution.",
        icon: <BriefcaseBusiness />,
        link: "/services",
    },
];

function ServicesIntro() {
    return (
        <section className="services-intro">
            <div className="services-intro__container">
                <div className="services-intro__heading">
                    <p className="services-intro__eyebrow">
                        What We Do
                    </p>

                    <h2>
                        <span className="services-intro__heading-line">One Firm. Every Sector.</span>
                        <span className="services-intro__heading-line">Limitless Potential.</span>
                    </h2>

                    <p className="services-intro__body">
                        At Eleven 11 Consult, we operate at the convergence
                        of media, technology, and industrial development. Our
                        multi-disciplinary approach ensures your business
                        receives not just advice — but a fully integrated
                        strategy built on authority, precision, and deep
                        sector intelligence.
                    </p>
                </div>

                <div className="services-intro__grid">
                    {services.map((service) => (
                        <article
                            className="services-intro__card"
                            key={service.title}
                        >
                            <div className="services-intro__icon">
                                {service.icon}
                            </div>

                            <h3>{service.title}</h3>

                            <p>{service.description}</p>

                            <Link
                                to={service.link}
                                className="services-intro__explore"
                            >
                                Explore
                                <span>→</span>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesIntro;

