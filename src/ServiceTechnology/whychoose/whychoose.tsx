
import {
    ArrowUpRight,
    BriefcaseBusiness,
    Layers3,
    Network,
    TrendingUp,
} from "lucide-react";

import "./whychoose.css";

interface TechnologyAdvantage {
    number: string;
    title: string;
    description: string;
    icon: typeof BriefcaseBusiness;
}

const technologyAdvantages: TechnologyAdvantage[] = [
    {
        number: "01",
        title: "Business Context First",
        description:
            "We understand your business, operations, challenges, and objectives before recommending a technology solution.",
        icon: BriefcaseBusiness,
    },
    {
        number: "02",
        title: "Strategic Technology",
        description:
            "Technology serves the strategy — not the other way around. Every solution is aligned with what your organisation is trying to achieve.",
        icon: Network,
    },
    {
        number: "03",
        title: "Built to Scale",
        description:
            "We design solutions with growth in mind, giving your technology the flexibility to evolve as your business expands.",
        icon: TrendingUp,
    },
    {
        number: "04",
        title: "One Partner. Multiple Disciplines.",
        description:
            "Strategy, media, technology, and industry expertise come together under one consultancy — giving you a broader view of every challenge.",
        icon: Layers3,
    },
];

function TechnologyWhyChoose() {
    return (
        <section className="technology-whychoose">
            <div className="technology-whychoose__header">
                <div className="technology-whychoose__label">
                    <span>02</span>
                    <span>Why Eleven 11</span>
                </div>

                <div className="technology-whychoose__intro">
                    <h2>
                        Why Choose Eleven 11
                        <span> for Technology?</span>
                    </h2>

                    <p>
                        We are not a generic IT vendor. We are a consultancy
                        that understands your business context first — and
                        then applies technology in service of your strategic
                        goals. Every solution we build is designed to grow
                        with you.
                    </p>
                </div>
            </div>

            <div className="technology-whychoose__diagram">
                <div className="technology-whychoose__diagram-line" />

                <div className="technology-whychoose__diagram-core">
                    <span>11</span>
                    <small>TECHNOLOGY</small>
                </div>

                <div className="technology-whychoose__diagram-orbit technology-whychoose__diagram-orbit--one" />
                <div className="technology-whychoose__diagram-orbit technology-whychoose__diagram-orbit--two" />
            </div>

            <div className="technology-whychoose__grid">
                {technologyAdvantages.map((advantage) => {
                    const Icon = advantage.icon;

                    return (
                        <article
                            className="technology-whychoose__card"
                            key={advantage.number}
                        >
                            <div className="technology-whychoose__card-top">
                                <span className="technology-whychoose__number">
                                    {advantage.number}
                                </span>

                                <div className="technology-whychoose__icon">
                                    <Icon size={22} strokeWidth={1.5} />
                                </div>
                            </div>

                            <div className="technology-whychoose__card-content">
                                <h3>{advantage.title}</h3>

                                <p>{advantage.description}</p>
                            </div>

                            <ArrowUpRight
                                className="technology-whychoose__card-arrow"
                                size={22}
                                strokeWidth={1.5}
                                aria-hidden="true"
                            />
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default TechnologyWhyChoose;

