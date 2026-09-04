import "./categories.css";
import {
    Presentation,
    Users,
    Lightbulb,
    TrendingUp,
} from "lucide-react";

const categories = [
    {
        number: "01",
        icon: Presentation,
        title: "Professional Development",
        description:
            "Practical training programmes that strengthen professional skills, performance, and workplace effectiveness.",
    },
    {
        number: "02",
        icon: Users,
        title: "Capacity Building",
        description:
            "Building the knowledge, systems, and capabilities organisations need to grow and deliver better results.",
    },
    {
        number: "03",
        icon: Lightbulb,
        title: "Skills & Innovation",
        description:
            "Equipping people with relevant skills and innovative thinking to navigate changing industries and opportunities.",
    },
    {
        number: "04",
        icon: TrendingUp,
        title: "Leadership & Growth",
        description:
            "Developing emerging and established leaders who can create direction, solve problems, and drive sustainable growth.",
    },
];

function TrainingCategories() {
    return (
        <section className="training-categories">
            <div className="training-categories__header">
                <p>What we offer</p>
                <h2>Training built for impact.</h2>
            </div>

            <div className="training-categories__grid">
                {categories.map((category) => {
                    const Icon = category.icon;

                    return (
                        <article
                            className="training-category"
                            key={category.number}
                        >
                            <div className="training-category__top">
                                <span>{category.number}</span>
                                <Icon size={28} strokeWidth={1.5} />
                            </div>

                            <h3>{category.title}</h3>

                            <p>{category.description}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default TrainingCategories;