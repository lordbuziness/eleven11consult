import "./categories.css";
import {
    Lightbulb,
    Code2,
    Workflow,
    BarChart3,
} from "lucide-react";

const categories = [
    {
        number: "01",
        icon: Lightbulb,
        title: "Technology Strategy",
        description:
            "Helping organizations understand where technology can create value and develop practical strategies for digital growth.",
    },
    {
        number: "02",
        icon: Code2,
        title: "Digital Solutions",
        description:
            "Designing and developing practical digital products and solutions around real organizational and customer needs.",
    },
    {
        number: "03",
        icon: Workflow,
        title: "Digital Transformation",
        description:
            "Helping organizations improve processes, adopt new technologies, and build systems that support better ways of working.",
    },
    {
        number: "04",
        icon: BarChart3,
        title: "Technology & Innovation",
        description:
            "Exploring emerging technologies and turning promising ideas into useful opportunities for organizations and communities.",
    },
];

function TechnologyCategories() {
    return (
        <section className="technology-categories">
            <div className="technology-categories__header">
                <div>
                    <span>02</span>
                    <small>Our Capabilities</small>
                </div>

                <h2>
                    Four ways we
                    <span> create value.</span>
                </h2>
            </div>

            <div className="technology-categories__grid">
                {categories.map((category) => {
                    const Icon = category.icon;

                    return (
                        <article
                            className="technology-category"
                            key={category.number}
                        >
                            <div className="technology-category__top">
                                <span>{category.number}</span>

                                <Icon
                                    className="technology-category__icon"
                                    size={52}
                                    strokeWidth={1.5}
                                />
                            </div>

                            <h3>{category.title}</h3>

                            <p>{category.description}</p>

                            <span className="technology-category__arrow">
                                →
                            </span>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default TechnologyCategories;