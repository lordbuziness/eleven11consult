import "./categories.css";
import {
    Sprout,
    Network,
    LineChart,
    Megaphone,
} from "lucide-react";

const categories = [
    {
        number: "01",
        icon: Sprout,
        title: "Agrotech Consultancy",
        description:
            "Helping agricultural organizations understand, adopt, and communicate technology that improves productivity and opportunity.",
    },
    {
        number: "02",
        icon: Network,
        title: "Value-Chain Communication",
        description:
            "Connecting producers, partners, markets, and stakeholders through clear and effective communication.",
    },
    {
        number: "03",
        icon: LineChart,
        title: "Agribusiness Strategy",
        description:
            "Developing practical strategies that help agribusinesses identify opportunities, strengthen operations, and grow sustainably.",
    },
    {
        number: "04",
        icon: Megaphone,
        title: "Sector Media & Storytelling",
        description:
            "Turning agricultural ideas, projects, and achievements into stories that audiences can understand and remember.",
    },
];

function AgricultureCategories() {
    return (
        <section className="agriculture-categories">
            <div className="agriculture-categories__header">
                <div>
                    <span>02</span>
                    <small>Our Capabilities</small>
                </div>

                <h2>
                    Four ways we
                    <span> create value.</span>
                </h2>
            </div>

            <div className="agriculture-categories__grid">
                {categories.map((category) => {
                    const Icon = category.icon;

                    return (
                        <article
                            className="agriculture-category"
                            key={category.number}
                        >
                            <div className="agriculture-category__top">
                                <span>{category.number}</span>
                                <Icon
                                    className="agriculture-category__icon"
                                    size={52}
                                    strokeWidth={1.5}
                                />
                            </div>

                            <h3>{category.title}</h3>

                            <p>{category.description}</p>

                            <span className="agriculture-category__arrow">
                                →
                            </span>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default AgricultureCategories;