
import "./Insights.css";

import article1 from "../../assets/images/article1.jpg";
import article2 from "../../assets/images/article2.jpg";
import article3 from "../../assets/images/article3.jpg";

interface Insight {
    category: string;
    title: string;
    date: string;
    image: string;
}

const insights: Insight[] = [
    {
        category: "Media & Communications",
        title: "The Future of Broadcast in Nigeria's Digital Age",
        date: "August 2026",
        image: article1,
    },
    {
        category: "Energy & Climate",
        title: "Building Africa's Green Economy: Opportunities in Renewable Energy",
        date: "August 2026",
        image: article2,
    },
    {
        category: "Technology",
        title: "Why Managed IT Services Are the Next Smart Move for Nigerian SMEs",
        date: "July 2026",
        image: article3,
    },
];

function Insights() {
    return (
        <section className="insights">
            <div className="insights__container">
                <div className="insights__header">
                    <div>
                        <p className="insights__eyebrow">
                            Latest Insights
                        </p>

                        <h2>
                            Perspectives From the
                            <br />
                            Intersection of Industry and Media.
                        </h2>

                        <p className="insights__subheadline">
                            Expert commentary on media, technology, energy,
                            agriculture, and the African business environment.
                        </p>
                    </div>

                    <a
                        href="/insights"
                        className="insights__all"
                    >
                        View All Insights
                        <span>→</span>
                    </a>
                </div>

                <div className="insights__grid">
                    {insights.map((insight, index) => (
                        <article
                            className={`insight-card ${
                                index === 0
                                    ? "insight-card--featured"
                                    : ""
                            }`}
                            key={insight.title}
                        >
                            <div className="insight-card__image">
                                <img
                                    src={insight.image}
                                    alt={insight.title}
                                />

                                <span className="insight-card__number">
                                    0{index + 1}
                                </span>
                            </div>

                            <div className="insight-card__content">
                                <div className="insight-card__meta">
                                    <span>{insight.category}</span>
                                    <span>{insight.date}</span>
                                </div>

                                <h3>{insight.title}</h3>

                                <span className="insight-card__read">
                                    Read Insight
                                    <span>↗</span>
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Insights;

