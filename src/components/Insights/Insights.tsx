import "./Insights.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

import { sanityClient } from "../../lib/sanity";
import { featuredInsightsQuery } from "../../lib/sanity/queries";

const builder = createImageUrlBuilder(sanityClient);

function urlFor(source: SanityImageSource) {
    return builder.image(source);
}

interface Insight {
    _id: string;
    category: string;
    title: string;
    image?: SanityImageSource;
    slug: {
        current: string;
    };
}

function Insights() {
    const [insights, setInsights] = useState<Insight[]>([]);

    useEffect(() => {
        sanityClient
            .fetch<Insight[]>(featuredInsightsQuery)
            .then(setInsights)
            .catch((error) => {
                console.error("Failed to fetch featured insights:", error);
            });
    }, []);

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

                    <Link
                        to="/insights"
                        className="insights__all"
                    >
                        View All Insights
                        <span>→</span>
                    </Link>
                </div>

                <div className="insights__grid">
                    {insights.map((insight, index) => (
                        <article
                            className={`insight-card ${
                                index === 0
                                    ? "insight-card--featured"
                                    : ""
                            }`}
                            key={insight._id}
                        >
                            <Link
                                to={`/insights/${insight.slug.current}`}
                                className="insight-card__link"
                            >
                                <div className="insight-card__image">
                                    {insight.image && (
                                        <img
                                            src={urlFor(insight.image)
                                                .width(1200)
                                                .quality(85)
                                                .url()}
                                            alt={insight.title}
                                        />
                                    )}

                                    <span className="insight-card__number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <div className="insight-card__content">
                                    <div className="insight-card__meta">
                                        <span>{insight.category}</span>
                                    </div>

                                    <h3>{insight.title}</h3>

                                    <span className="insight-card__read">
                                        Read Insight
                                        <span>↗</span>
                                    </span>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Insights;