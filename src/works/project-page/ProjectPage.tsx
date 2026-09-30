import "./ProjectPage.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { sanityClient, urlFor } from "../../lib/sanity";
import type { SanityImageSource } from "@sanity/image-url";
import { projectBySlugQuery } from "../../lib/sanity/queries";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

type ProjectItem = {
    _key: string;
    title?: string;
    url?: string;
    thumbnail?: SanityImageSource;
};

type Project = {
    category: string;
    image?: SanityImageSource;
    items?: ProjectItem[];
};

function ProjectPage() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        if (!slug) return;

        sanityClient
            .fetch<Project | null>(projectBySlugQuery, { slug })
            .then(setProject)
            .catch((error) => {
                console.error("Failed to fetch project:", error);
            });
    }, [slug]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />

            <main className="project-page">
                <button
                    type="button"
                    className="project-page__back"
                    onClick={() => navigate("/works")}
                >
                    ? Back to Works
                </button>

                <header className="project-page__header">
                    <h1 className="project-page__title">
                        {project.category}
                    </h1>
                </header>

                {project.image && (
                    <img
                        className="project-page__image"
                        src={urlFor(project.image)
                            .width(1600)
                            .quality(85)
                            .url()}
                        alt={project.category}
                    />
                )}

                <section className="project-page__content">
                    {project.items?.map((item) => {
                        const content = (
                            <div className="project-page__item-content">
                                {item.thumbnail ? (
                                    <img
                                        className="project-page__item-thumbnail"
                                        src={urlFor(item.thumbnail)
                                            .width(1200)
                                            .quality(85)
                                            .url()}
                                        alt={item.title || "Project content"}
                                    />
                                ) : (
                                    <div className="project-page__item-no-thumbnail">
                                        NO THUMBNAIL
                                    </div>
                                )}

                                {item.title && (
                                    <h2 className="project-page__item-title">
                                        {item.title}
                                    </h2>
                                )}
                            </div>
                        );

                        return item.url ? (
                            <a
                                className="project-page__item"
                                key={item._key}
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {content}
                            </a>
                        ) : (
                            <article
                                className="project-page__item"
                                key={item._key}
                            >
                                {content}
                            </article>
                        );
                    })}
                </section>
            </main>

            <Footer />
        </>
    );
}

export default ProjectPage;


