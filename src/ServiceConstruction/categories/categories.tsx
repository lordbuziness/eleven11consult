import "./categories.css";
import {
    HardHat,
    Building2,
    Route,
    Megaphone,
} from "lucide-react";

const categories = [
    {
        number: "01",
        icon: HardHat,
        title: "Construction Consultancy",
        description:
            "Helping construction businesses strengthen their positioning, identify opportunities, and make better strategic decisions.",
    },
    {
        number: "02",
        icon: Building2,
        title: "Project Communication",
        description:
            "Making complex construction and infrastructure projects clear, accessible, and compelling to clients, partners, and stakeholders.",
    },
    {
        number: "03",
        icon: Route,
        title: "Infrastructure Strategy",
        description:
            "Developing practical strategies that connect infrastructure projects with long-term business, community, and development goals.",
    },
    {
        number: "04",
        icon: Megaphone,
        title: "Industry Media & Storytelling",
        description:
            "Turning projects, expertise, and achievements into powerful stories that strengthen visibility and build trust.",
    },
];

function ConstructionCategories() {
    return (
        <section className="construction-categories">
            <div className="construction-categories__header">
                <div>
                    <span>02</span>
                    <small>Our Capabilities</small>
                </div>

                <h2>
                    Four ways we
                    <span> create value.</span>
                </h2>
            </div>

            <div className="construction-categories__grid">
                {categories.map((category) => {
                    const Icon = category.icon;

                    return (
                        <article
                            className="construction-category"
                            key={category.number}
                        >
                            <div className="construction-category__top">
                                <span>{category.number}</span>

                                <Icon
                                    className="construction-category__icon"
                                    size={52}
                                    strokeWidth={1.5}
                                />
                            </div>

                            <h3>{category.title}</h3>

                            <p>{category.description}</p>

                            <span className="construction-category__arrow">
                                →
                            </span>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default ConstructionCategories;