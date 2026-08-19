
import "./BloomAIHub.css";

import { Brain, Medal, Rocket } from "lucide-react";

const tools = [
    {
        icon: Brain,
        title: "Talent Discovery Quiz",
        description:
            "Uncover hidden talents and strengths through our intelligent assessment.",
    },
    {
        icon: Medal,
        title: "Leadership Assessment",
        description:
            "Measure leadership potential and get personalized growth pathways.",
    },
    {
        icon: Rocket,
        title: "Future Career Finder",
        description:
            "Explore careers aligned with your interests, skills, and passions.",
    },
];

function BloomAIHub() {
    return (
        <section id="fest" className="bloom-ai-hub">

            <div className="bloom-ai-hub__header">
                <span className="bloom-ai-hub__eyebrow">
                    BLOOM AI HUB
                </span>

                <h2 className="bloom-ai-hub__title">
                    Discover Your
                    <br />
                    <em>Unique Potential</em>
                </h2>

                <p className="bloom-ai-hub__intro">
                    Discover your unique potential with our AI-powered tools.
                </p>
            </div>


            <div className="bloom-ai-hub__cards">

                {tools.map((tool) => {
                    const Icon = tool.icon;

                    return (
                        <article
                            className="bloom-ai-hub__card"
                            key={tool.title}
                        >
                            <div className="bloom-ai-hub__icon">
                                <Icon />
                            </div>

                            <h3>{tool.title}</h3>

                            <p>{tool.description}</p>
                        </article>
                    );
                })}

            </div>

        </section>
    );
}

export default BloomAIHub;

