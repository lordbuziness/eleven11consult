import "./Sectors.css";

import {
    Zap,
    Sprout,
    Cpu,
    Building2,
    Radio,
    GraduationCap,
} from "lucide-react";

const sectors = [
    {
        name: "Energy & Climate",
        icon: Zap,
        accent: "#2E7D32",
    },
    {
        name: "Agriculture",
        icon: Sprout,
        accent: "#8D6E63",
    },
    {
        name: "Technology Solutions",
        icon: Cpu,
        accent: "#1976D2",
    },
    {
        name: "Construction & Real Estate",
        icon: Building2,
        accent: "#F57C00",
    },
    {
        name: "Media & Communications",
        icon: Radio,
        accent: "#E63946",
    },
    {
        name: "Training & Development",
        icon: GraduationCap,
        accent: "#7B1FA2",
    },
];

function Industries() {
    return (
        <section className="industries">

            {/* Section Heading */}
            <div className="industries__heading">

                <span className="industries__eyebrow">
                    INDUSTRIES WE SERVE
                </span>

                <h2>
                    Built for the Sectors That Move Africa
                </h2>

                <p>
                    Deep sector expertise across energy, agriculture,
                    technology, construction, media, and development.
                </p>

            </div>

            <div className="industries__container">

                {/* Connection lines */}
                <div
                    className="industries__connections"
                    aria-hidden="true"
                >
                    <span className="connection-line connection-line--1" />
                    <span className="connection-line connection-line--2" />
                    <span className="connection-line connection-line--3" />
                    <span className="connection-line connection-line--4" />
                    <span className="connection-line connection-line--5" />
                    <span className="connection-line connection-line--6" />
                </div>

                {/* Industry circles */}
                <div className="industries__sectors">

                    {sectors.map((sector, index) => {
                        const Icon = sector.icon;

                        return (
                            <div
                                key={sector.name}
                                className={`industry-circle industry-circle--${index + 1}`}
                                style={
                                    {
                                        "--sector-accent": sector.accent,
                                    } as React.CSSProperties
                                }
                            >
                                <Icon className="industries__sector-icon" />

                                <span className="industries__sector-name">
                                    {sector.name}
                                </span>
                            </div>
                        );
                    })}

                </div>

                {/* Eleven 11 center */}
                <div className="industries__main">

                    <span className="industries__main-small">
                        ELEVEN11
                    </span>

                    <span className="industries__main-title">
                        CONSULT
                    </span>

                    <span className="industries__main-subtitle">
                        INDUSTRY EXPERTISE
                    </span>

                </div>

            </div>

        </section>
    );
}

export default Industries;