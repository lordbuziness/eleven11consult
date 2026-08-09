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
    category: "Strategy",
    title: "Lorem ipsum dolor sit amet consectetur.",
    date: "August 2026",
    image: article1,
  },
  {
    category: "Energy & Climate",
    title: "Lorem ipsum dolor sit amet consectetur.",
    date: "August 2026",
    image: article2,
  },
  {
    category: "Technology",
    title: "Lorem ipsum dolor sit amet consectetur.",
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
              Insights
            </p>

            <h2>
              Perspectives that
              <br />
              shape better decisions.
            </h2>
          </div>

          <a
            href="#insights"
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
              key={insight.title + index}
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