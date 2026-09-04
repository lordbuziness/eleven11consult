import "./filter-tab.css";
import { useState } from "react";

const categories = [
    "All",
    "Media",
    "Technology",
    "Energy",
    "Agriculture",
    "Construction",
    "Training",
];

function FilterTab() {
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <section className="works-filter">
            <div className="works-filter__inner">
                <span className="works-filter__label">
                    Explore by industry
                </span>

                <div className="works-filter__tabs">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            className={
                                activeCategory === category
                                    ? "works-filter__tab works-filter__tab--active"
                                    : "works-filter__tab"
                            }
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FilterTab;