
import "./article-list.tsx.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

import { sanityClient } from "../../lib/sanity";
import { allInsightsQuery } from "../../lib/sanity/queries";

const builder = createImageUrlBuilder(sanityClient);

function urlFor(source: SanityImageSource) {
    return builder.image(source);
}

type Insight = {
    _id: string;
    category: string;
    title: string;
    image?: SanityImageSource;
    slug: {
        current: string;
    };
};

function ArticleList() {
    const [articles, setArticles] = useState<Insight[]>([]);

    useEffect(() => {
        sanityClient
            .fetch<Insight[]>(allInsightsQuery)
            .then(setArticles)
            .catch((error) => {
                console.error("Failed to fetch insights:", error);
            });
    }, []);

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
                        key={article._id}
                    >
                        <span className="article-list__number">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="article-list__image">
                            {article.image && (
                                <img
                                    src={urlFor(article.image)
                                        .width(600)
                                        .quality(80)
                                        .url()}
                                    alt={article.title}
                                />
                            )}
                        </div>

                        <div className="article-list__content">
                            <span>{article.category}</span>

                            <h3>{article.title}</h3>
                        </div>

                        <Link
                            to={`/insights/${article.slug.current}`}
                            className="article-list__arrow"
                            aria-label={`Read ${article.title}`}
                        >
                            →
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default ArticleList;

