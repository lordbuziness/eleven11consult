import "./featured.css";

import agricultureImage from "../assets/images/agric 1.jpg";
import businessImage from "../assets/images/business 1.jpg";
import technologyImage from "../assets/images/tech 1.jpg";

const featuredArticles = [
    {
        category: "Agriculture",
        title: "The future of agriculture is smarter, connected, and more sustainable.",
        image: agricultureImage,
    },
    {
        category: "Business",
        title: "Building businesses that are ready for what comes next.",
        image: businessImage,
    },
    {
        category: "Technology",
        title: "Technology is changing how African businesses compete.",
        image: technologyImage,
    },
];

function FeaturedArticles() {
    return (
        <section className="featured-articles">
            <div className="featured-articles__header">
                <div>
                    <span className="featured-articles__eyebrow">
                        Featured
                    </span>

                    <h2>
                        Ideas worth
                        <span> exploring.</span>
                    </h2>
                </div>

                <p>
                    Our latest perspectives on the ideas and industries
                    shaping tomorrow.
                </p>
            </div>

            <div className="featured-articles__grid">
                {featuredArticles.map((article) => (
                    <article
                        className="featured-card"
                        key={article.title}
                    >
                        <div className="featured-card__image">
                            <img
                                src={article.image}
                                alt={article.title}
                            />
                        </div>

                        <div className="featured-card__content">
                            <span>{article.category}</span>

                            <h3>{article.title}</h3>

                            <button className="featured-card__link">
                                Read article <span>→</span>
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default FeaturedArticles;