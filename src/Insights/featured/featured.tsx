import "./featured.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

import { sanityClient } from "../../lib/sanity";
import { featuredInsightsQuery } from "../../lib/sanity/queries";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source: SanityImageSource) {
    return builder.image(source);
}

type FeaturedArticle = {
    _id: string;
    category: string;
    title: string;
    image?: SanityImageSource;
    slug: {
        current: string;
    };

};


function FeaturedArticles() {
    const [featuredArticles, setFeaturedArticles] = useState<FeaturedArticle[]>([]);

    useEffect(() => {
        sanityClient
            .fetch<FeaturedArticle[]>(featuredInsightsQuery)
            .then(setFeaturedArticles)
            .catch((error) => {
                console.error("Failed to fetch featured insights:", error);
            });
    }, []);

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
                        key={article._id}
                    >
                        <div className="featured-card__image">
                            {article.image && (
                                <img
                                    src={urlFor(article.image)
                                        .width(1200)
                                        .quality(80)
                                        .url()}
                                    alt={article.title}
                                />
                            )}
                        </div>

                        <div className="featured-card__content">
                            <span>{article.category}</span>

                            <h3>{article.title}</h3>

                            <Link
    className="featured-card__link"
    to={`/insights/${article.slug?.current}`}
>
    Read article <span>→</span>
</Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default FeaturedArticles;
