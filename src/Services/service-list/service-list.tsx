import "./service-list.css";
import {
    MessageSquare,
    Cpu,
    Zap,
    Sprout,
    HardHat,
    GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    {
        number: "01",
        icon: MessageSquare,
        title: "Media & Communications",
        description:
            "Strategic communication, media production, digital presence, and storytelling that make ideas visible and understood.",
        link: "/services/media",
    },
    {
        number: "02",
        icon: Cpu,
        title: "Technology",
        description:
            "Technology strategy, digital solutions, and innovation support that help organizations build and adapt for the future.",
        link: "/services/technology",
    },
    {
        number: "03",
        icon: Zap,
        title: "Energy",
        description:
            "Strategy, communication, and sector expertise for organizations navigating the changing energy landscape.",
        link: "/services/energy",
    },
    {
        number: "04",
        icon: Sprout,
        title: "Agriculture",
        description:
            "Agrotech, agribusiness strategy, value-chain communication, and storytelling for a stronger agricultural ecosystem.",
        link: "/services/agriculture",
    },
    {
        number: "05",
        icon: HardHat,
        title: "Construction",
        description:
            "Consultancy, project communication, infrastructure strategy, and storytelling for the built environment.",
        link: "/services/construction",
    },
    {
        number: "06",
        icon: GraduationCap,
        title: "Training",
        description:
            "Practical learning and capacity development designed to equip people and organizations with useful skills.",
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