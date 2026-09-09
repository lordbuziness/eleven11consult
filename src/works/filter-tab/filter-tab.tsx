
import "./filter-tab.css";

const categories = [
    {
        name: "All",
        path: "/services",
    },
    {
        name: "Media",
        path: "/services/media",
    },
    {
        name: "Technology",
        path: "/services/technology",
    },
    {
        name: "Energy",
        path: "/services/energy",
    },
    {
        name: "Agriculture",
        path: "/services/agriculture",
    },
    {
        name: "Construction",
        path: "/services/construction",
    },
    {
        name: "Training",
        path: "/services/training",
    },
];

function FilterTab() {
    return (
        <section className="works-filter">
            <div className="works-filter__inner">
                <span className="works-filter__label">
                    Explore by industry
                </span>

                <div className="works-filter__tabs">
                    {categories.map((category) =>
                        category.path ? (
                            <a
                                key={category.name}
                                href={category.path}
                                className="works-filter__tab"
                            >
                                {category.name}
                            </a>
                        ) : (
                            <button
                                key={category.name}
                                type="button"
                                className="works-filter__tab works-filter__tab--active"
                            >
                                {category.name}
                            </button>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}

export default FilterTab;

