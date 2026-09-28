import "./project-grid.css";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../projects";
import ProjectMedia from "../ProjectMedia";

function ProjectGrid() {
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
                            key={project.title}
                            onClick={() => {
                                if (project.youtubeUrl) {
                                    window.location.href = project.youtubeUrl;
                                }
                            }}
                            onKeyDown={(event) => {
                                if (
                                    project.youtubeUrl &&
                                    (event.key === "Enter" ||
                                        event.key === " ")
                                ) {
                                    event.preventDefault();
                                    window.location.href =
                                        project.youtubeUrl;
                                }
                            }}
                            role={project.youtubeUrl ? "link" : undefined}
                            tabIndex={project.youtubeUrl ? 0 : undefined}
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
