
import "./InsightArticle.css";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

import BackToTop from "../components/BackToTop/BackToTop";
import Footer from "../components/Footer/Footer";

import { sanityClient } from "../lib/sanity";
import { insightBySlugQuery } from "../lib/sanity/queries";

const builder = createImageUrlBuilder(sanityClient);

function urlFor(source: SanityImageSource) {
    return builder.image(source);
}

type Insight = {
    title: string;
    category: string;
    excerpt?: string;
    content?: any[];
    image?: SanityImageSource;
};

function InsightArticle() {
    const { slug } = useParams<{ slug: string }>();
    const [article, setArticle] = useState<Insight | null>(null);
    const [showFloatingBack, setShowFloatingBack] = useState(false);
    const [atArticleEnd, setAtArticleEnd] = useState(false);

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!slug) return;

        sanityClient
            .fetch<Insight | null>(insightBySlugQuery, { slug })
            .then((data) => {
                console.log("Sanity article:", data);
                setArticle(data);
            })
            .catch((error) => {
                console.error("Failed to fetch insight:", error);
            });
    }, [slug]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            setShowFloatingBack(scrollPosition > 300);

            if (contentRef.current) {
                const contentBottom =
                    contentRef.current.getBoundingClientRect().bottom;

                setAtArticleEnd(contentBottom <= window.innerHeight + 40);
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [article]);

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <BackToTop />

            {showFloatingBack && (
                <Link
                    to="/insights"
                    className={`floating-back-to-insights ${
                        atArticleEnd ? "floating-back-to-insights--expanded" : ""
                    }`}
                    aria-label="Back to Insights"
                >
                    <span>‹</span>

                    {atArticleEnd && (
                        <span className="floating-back-to-insights__text">
                            Back to Insights
                        </span>
                    )}
                </Link>
            )}

            <main className="insight-article">
                <article>
                    <header className="insight-article__header">
                        <span className="insight-article__category">
                            {article.category}
                        </span>

                        <h1 className="insight-article__title">
                            {article.title}
                        </h1>

                        {article.excerpt && (
                            <p className="insight-article__excerpt">
                                {article.excerpt}
                            </p>
                        )}
                    </header>

                    {article.image && (
                        <img
                            className="insight-article__image"
                            src={urlFor(article.image)
                                .width(1600)
                                .quality(85)
                                .url()}
                            alt={article.title}
                        />
                    )}

                    <div
                        ref={contentRef}
                        className="insight-article__content"
                    >
                        {article.content && (
                            <PortableText value={article.content} />
                        )}

                        <Link
                            to="/insights"
                            className="back-to-insights"
                        >
                            <span>‹</span> Back to Insights
                        </Link>
                    </div>
                </article>
            </main>

            <Footer />
        </>
    );
}

export default InsightArticle;

