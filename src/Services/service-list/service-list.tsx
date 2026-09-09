
import "./service-list.css";
import {
    MessageSquare,
    Zap,
    Sprout,
    HardHat,
    Cpu,
    GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    {
        number: "01",
        icon: MessageSquare,
        title: "Media & Communications",
        description:
            "High-end broadcast production, documentary filmmaking, reportorial strategy, digital content development, AI-integrated media workflows, and corporate public relations. We are storytellers in service of industry.",
        link: "/services/media",
    },
    {
        number: "02",
        icon: Zap,
        title: "Energy & Climate",
        description:
            "Strategic advisory on renewable energy transitions, sustainability frameworks, and climate storytelling — positioning your organisation at the forefront of Africa's green economy.",
        link: "/services/energy",
    },
    {
        number: "03",
        icon: Sprout,
        title: "Agriculture",
        description:
            "Agrotech consultancy, value-chain communication, and strategic advisory to help agricultural businesses navigate Nigeria's evolving food and farming landscape.",
        link: "/services/agriculture",
    },
    {
        number: "04",
        icon: HardHat,
        title: "Construction & Real Estate",
        description:
            "Project management consultancy, infrastructure media, and strategic communications for developers, contractors, and real estate players building the Africa of tomorrow.",
        link: "/services/construction",
    },
    {
        number: "05",
        icon: Cpu,
        title: "Technology Solutions",
        description:
            "Custom software development, IT infrastructure design and deployment, and outsourced managed IT support — the digital engine your business needs to compete and scale.",
        link: "/services/technology",
    },
    {
        number: "06",
        icon: GraduationCap,
        title: "Training & Development",
        description:
            "Corporate human capital programmes and youth-focused development initiatives, including our signature Heritage Camp — investing in the people who will lead Africa forward.",
        link: "/services/training",
    },
];

function ServiceList() {
    return (
        <section className="service-list">
            <div className="service-list__header">
                <div>
                    <span>02</span>
                    <small>Our Services</small>
                </div>

                <h2>
                    Six disciplines.
                    <span> One direction.</span>
                </h2>
            </div>

            <div className="service-list__grid">
                {services.map((service) => {
                    const Icon = service.icon;

                    return (
                        <Link
                            to={service.link}
                            className="service-card"
                            key={service.number}
                        >
                            <div className="service-card__top">
                                <span>{service.number}</span>

                                <Icon
                                    className="service-card__icon"
                                    size={48}
                                    strokeWidth={1.5}
                                />
                            </div>

                            <h3>{service.title}</h3>

                            <p>{service.description}</p>

                            <span className="service-card__arrow">
                                →
                            </span>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}

export default ServiceList;


