import "./article-list.tsx.css";

import agricImage from "../assets/images/agric 2.jpg";
import businessImage from "../assets/images/business 2.jpg";
import constructionImage from "../assets/images/construction 1.jpg";
import energyImage from "../assets/images/energy 1.jpg";
import mediaImage from "../assets/images/media 1.jpg";
import techImage from "../assets/images/tech 3.jpg";

const articles = [
    {
        category: "Agriculture",
        title: "How innovation can transform modern agriculture",
        image: agricImage,
    },
    {
        category: "Business",
        title: "What resilient businesses are doing differently",
        image: businessImage,
    },
    {
        category: "Construction",
        title: "Building the infrastructure of tomorrow",
        image: constructionImage,
    },
    {
        category: "Energy",
        title: "Rethinking Africa's energy future",
        image: energyImage,
    },
    {
        category: "Media",
        title: "Why storytelling matters more than ever",
        image: mediaImage,
    },
    {
        category: "Technology",
        title: "The technologies shaping the next decade",
        image: techImage,
    },
];

function ArticleList() {
    return (
        <section className="article-list">
            <div className="article-list__header">
                <span>All Insights</span>
                <h2>
                    More from
                    <span> Eleven 11.</span>
                </h2>
            </div>

            <div className="article-list__items">
                {articles.map((article, index) => (
                    <article
                        className="article-list__item"
                        key={article.title}
                    >
                        <span className="article-list__number">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="article-list__image">
                            <img
                                src={article.image}
                                alt={article.title}
                            />
                        </div>

                        <div className="article-list__content">
                            <span>{article.category}</span>
                            <h3>{article.title}</h3>
                        </div>

                        <button className="article-list__arrow">
                            →
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default ArticleList;