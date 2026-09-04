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
        title: "Discover",
        description:
            "We understand your goals, audience, challenges, and the context surrounding the project.",
        icon: Search,
    },
    {
        number: "02",
        title: "Define",
        description:
            "We turn research and insight into a clear strategic direction and a focused plan.",
        icon: Compass,
    },
    {
        number: "03",
        title: "Create",
        description:
            "We develop the ideas, identities, experiences, and solutions that bring the strategy to life.",
        icon: Lightbulb,
    },
    {
        number: "04",
        title: "Deliver",
        description:
            "We refine, implement, and deliver the final work with attention to every detail.",
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
                        <article className="process-card" key={step.number}>
                            <div className="process-card__top">
                                <span>{step.number}</span>

                                <Icon className="process-card__icon" strokeWidth={1.2} />
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