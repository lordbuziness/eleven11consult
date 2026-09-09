
import { useEffect, useState } from "react";
import "./Sectors.css";

import {
    Zap,
    Sprout,
    Cpu,
    Building2,
    Radio,
    GraduationCap,
} from "lucide-react";

interface Sector {
    name: string;
    description: string;
    icon: React.ElementType;
    accent: string;
    link: string;
}

const sectors: Sector[] = [
    {
        name: "Media & Communications",
        description:
            "We tell the stories that move industries forward — through broadcast production, investigative journalism, digital content, and corporate PR.",
        icon: Radio,
        accent: "#E63946",
        link: "/services/media",
    },
    {
        name: "Energy & Climate",
        description:
            "Strategic advisory on renewable energy transitions, sustainability storytelling, and climate-conscious business development.",
        icon: Zap,
        accent: "#2E7D32",
        link: "/services/energy",
    },
    {
        name: "Agriculture",
        description:
            "Agrotech consultancy and value-chain communication to unlock the full potential of Nigeria's agricultural landscape.",
        icon: Sprout,
        accent: "#8D6E63",
        link: "/services/agriculture",
    },
    {
        name: "Construction & Real Estate",
        description:
            "Project management, infrastructure media, and strategic support for the organisations shaping the built environment.",
        icon: Building2,
        accent: "#F57C00",
        link: "/services/construction",
    },
    {
        name: "Technology Solutions",
        description:
            "Software development, IT infrastructure, and managed support services — building the digital future of African enterprise.",
        icon: Cpu,
        accent: "#1976D2",
        link: "/services/technology",
    },
    {
        name: "Training & Development",
        description:
            "Human capital investment through corporate training and youth-focused programmes, including the Heritage Camp initiative.",
        icon: GraduationCap,
        accent: "#7B1FA2",
        link: "/services/training",
    },
];

function Industries() {
    const [selectedSector, setSelectedSector] = useState(0);
    const [detailAnimationKey, setDetailAnimationKey] = useState(0);

    useEffect(() => {
        const sectorSequence = window.setInterval(() => {
            setSelectedSector((currentSector) => {
                const nextSector =
                    (currentSector + 1) % sectors.length;

                setDetailAnimationKey((currentKey) => currentKey + 1);

                return nextSector;
            });
        }, 4500);

        return () => {
            window.clearInterval(sectorSequence);
        };
    }, []);

    const selectSector = (index: number) => {
        setSelectedSector(index);
        setDetailAnimationKey((currentKey) => currentKey + 1);
    };

    const activeSector = sectors[selectedSector];
    const ActiveIcon = activeSector.icon;

    return (
        <section className="industries">
            <div className="industries__heading">
                <span className="industries__eyebrow">
                    Our Sectors
                </span>

                <h2>Industries We Serve</h2>

                <p>
                    We work with the sectors that shape Africa's economic
                    and cultural future.
                </p>
            </div>

            <div className="industries__container">
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

                <div className="industries__sectors">
                    {sectors.map((sector, index) => {
                        const Icon = sector.icon;
                        const isActive = selectedSector === index;

                        return (
                            <button
                                key={sector.name}
                                type="button"
                                className={`industry-circle industry-circle--${
                                    index + 1
                                } ${
                                    isActive
                                        ? "industry-circle--active"
                                        : ""
                                }`}
                                style={
                                    {
                                        "--sector-accent":
                                            sector.accent,
                                    } as React.CSSProperties
                                }
                                onClick={() => selectSector(index)}
                                aria-label={`View ${sector.name}`}
                                aria-pressed={isActive}
                            >
                                <Icon className="industries__sector-icon" />

                                <span className="industries__sector-name">
                                    {sector.name}
                                </span>
                            </button>
                        );
                    })}
                </div>

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

            <div
                className="industries__detail"
                style={
                    {
                        "--sector-accent":
                            activeSector.accent,
                    } as React.CSSProperties
                }
            >
                <div
                    key={detailAnimationKey}
                    className="industries__detail-animation"
                >
                    <div className="industries__detail-icon">
                        <ActiveIcon />
                    </div>

                    <div className="industries__detail-content">
                        <span className="industries__detail-label">
                            Sector Expertise
                        </span>

                        <h3>{activeSector.name}</h3>

                        <p>{activeSector.description}</p>

                        <a
                            href={activeSector.link}
                            className="industries__detail-link"
                        >
                            Explore
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Industries;

