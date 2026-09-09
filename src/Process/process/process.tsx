

import "./process.css";
import {
    Search,
    Compass,
    Lightbulb,
    Rocket,
} from "lucide-react";

const processSteps = [
    {
        number: "01",
        title: "Discovery & Intelligence",
        description:
            "We learn before we advise. Every engagement opens with a deep discovery phase. We study your industry dynamics, competitive landscape, stakeholder environment, and organisational goals. We listen more than we speak — because the best strategies are built on the most complete intelligence.",
        icon: Search,
    },
    {
        number: "02",
        title: "Strategy & Architecture",
        description:
            "We design before we build. Our multidisciplinary team synthesises discovery insights into a clear, actionable strategic architecture. Whether the mandate is a broadcast series, a software platform, a sustainability roadmap, or an IT infrastructure plan — the blueprint is built with precision and aligned to your business objectives.",
        icon: Compass,
    },
    {
        number: "03",
        title: "Execution & Delivery",
        description:
            "We build what we promise. Strategy without execution is only theory. Our team moves from blueprint to delivery with the same level of care — coordinating across media, technology, and sector specialists to ensure every output meets the highest standard of craft and performance.",
        icon: Lightbulb,
    },
    {
        number: "04",
        title: "Review & Optimisation",
        description:
            "We stay until it works. After delivery, we don't disappear. We measure outcomes, gather feedback, and refine our approach to ensure sustained impact. Our engagements are partnerships — not transactions.",
        icon: Rocket,
    },
];

function ProcessSteps() {
    return (
        <section className="process-steps">
            <div className="process-steps__header">
                <span>02 — The Process</span>

                <h2>
                    From first thought
                    <br />
                    <em>to final impact.</em>
                </h2>
            </div>

            <div className="process-steps__grid">
                {processSteps.map((step) => {
                    const Icon = step.icon;

                    return (
                        <article
                            className="process-card"
                            key={step.number}
                        >
                            <div className="process-card__top">
                                <span>{step.number}</span>

                                <Icon
                                    className="process-card__icon"
                                    strokeWidth={1.2}
                                />
                            </div>

                            <div className="process-card__content">
                                <h3>{step.title}</h3>

                                <p>{step.description}</p>
                            </div>

                            <div className="process-card__line" />
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default ProcessSteps;

