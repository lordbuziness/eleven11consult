import "./categories.css";
import {
    Megaphone,
    Video,
    Globe,
    PenTool,
} from "lucide-react";

const categories = [
    {
        number: "01",
        icon: Megaphone,
        title: "Strategic Communications",
        description:
            "Building communication strategies that give organizations clarity, consistency, and a stronger voice across the channels that matter.",
    },
    {
        number: "02",
        icon: Video,
        title: "Media Production",
        description:
            "Creating visual and multimedia content that turns ideas, projects, people, and achievements into compelling stories.",
    },
    {
        number: "03",
        icon: Globe,
        title: "Digital Media & Presence",
        description:
            "Helping organizations build stronger digital identities and connect with audiences through relevant, purposeful content.",
    },
    {
        number: "04",
        icon: PenTool,
        title: "Storytelling & Content",
        description:
            "Developing narratives, written content, campaigns, and stories that make complex ideas clear, human, and memorable.",
    },
];

function MediaCategories() {
    return (
        <section className="media-categories">
            <div className="media-categories__header">
                <div>
                    <span>02</span>
                    <small>Our Capabilities</small>
                </div>

                <h2>
                    Four ways we
                    <span> create influence.</span>
                </h2>
            </div>

            <div className="media-categories__grid">
                {categories.map((category) => {
                    const Icon = category.icon;

                    return (
                        <article
                            className="media-category"
                            key={category.number}
                        >
                            <div className="media-category__top">
                                <span>{category.number}</span>

                                <Icon
                                    className="media-category__icon"
                                    size={52}
                                    strokeWidth={1.5}
                                />
                            </div>

                            <h3>{category.title}</h3>

                            <p>{category.description}</p>

                            <span className="media-category__arrow">
                                →
                            </span>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default MediaCategories;
