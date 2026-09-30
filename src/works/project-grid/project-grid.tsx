import "./project-grid.css";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectMedia from "../ProjectMedia";
import type { SanityImageSource } from "@sanity/image-url";
import { getProjects } from "../sanity-projects";

export interface SanityProject {
    _id: string;
    title: string;
    category: string;
    description?: string;
    image?: SanityImageSource;
    slug?: {
        current: string;
    };
}

function ProjectGrid() {
    const [projects, setProjects] = useState<SanityProject[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getProjects()
            .then((data) => {
                setProjects(data);
            })
            .catch((error) => {
                console.error("Failed to load projects from Sanity:", error);
            });
    }, []);

    return (
        <section className="project-grid">
            <div className="project-grid__inner">
                <div className="project-grid__header">
                    <span>02 — Selected Projects</span>
                </div>

                <div className="project-grid__items">
                    {projects.map((project, index) => (
                        <article
                            className={`project-card ${
                                index % 3 === 0
                                    ? "project-card--large"
                                    : ""
                            }`}
                            key={project._id}
                            onClick={() => {
                                if (project.slug?.current) {
                                    navigate(
                                        `/works/${project.slug.current}`
                                    );
                                }
                            }}
                            onKeyDown={(event) => {
                                if (
                                    project.slug?.current &&
                                    (event.key === "Enter" ||
                                        event.key === " ")
                                ) {
                                    event.preventDefault();
                                    navigate(
                                        `/works/${project.slug.current}`
                                    );
                                }
                            }}
                            role={project.slug?.current ? "link" : undefined}
                            tabIndex={project.slug?.current ? 0 : undefined}
                        >
                            <div className="project-card__image">
                                <ProjectMedia project={project} />

                                <div className="project-card__arrow">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>

                            <div className="project-card__info">
                                <span>{project.category}</span>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectGrid;

