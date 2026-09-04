import "./categories.css";
import {
    Zap,
    Radio,
    Leaf,
    Megaphone,
} from "lucide-react";

const categories = [
    {
        number: "01",
        icon: Zap,
        title: "Energy Consultancy",
        description:
            "Helping energy organizations understand opportunities, strengthen their positioning, and make better strategic decisions.",
    },
    {
        number: "02",
        icon: Radio,
        title: "Energy Communication",
        description:
            "Making complex energy projects, technologies, and ideas clear and accessible to investors, partners, communities, and the public.",
    },
    {
        number: "03",
        icon: Leaf,
        title: "Energy Transition Strategy",
        description:
            "Supporting organizations as they navigate renewable energy, sustainability, innovation, and the transition toward a changing energy system.",
    },
    {
        number: "04",
        icon: Megaphone,
        title: "Energy Media & Storytelling",
        description:
            "Turning energy projects, expertise, and achievements into compelling stories that build visibility, trust, and understanding.",
    },
];

function EnergyCategories() {
    return (
        <section className="energy-categories">
            <div className="energy-categories__header">
                <div>
                    <span>02</span>
                    <small>Our Capabilities</small>
                </div>

                <h2>
                    Four ways we
                    <span> create value.</span>
                </h2>
            </div>

            <div className="energy-categories__grid">
                {categories.map((category) => {
                    const Icon = category.icon;

                    return (
                        <article
                            className="energy-category"
                            key={category.number}
                        >
                            <div className="energy-category__top">
                                <span>{category.number}</span>

                                <Icon
                                    className="energy-category__icon"
                                    size={52}
                                    strokeWidth={1.5}
                                />
                            </div>

                            <h3>{category.title}</h3>

                            <p>{category.description}</p>

                            <span className="energy-category__arrow">
                                →
                            </span>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default EnergyCategories;
