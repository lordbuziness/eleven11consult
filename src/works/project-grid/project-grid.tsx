import "./project-grid.css";
import { ArrowUpRight } from "lucide-react";

import mediaImage from "../assets/images/media project.jpg";
import techImage from "../assets/images/tech project.jpg";
import energyImage from "../assets/images/energy project.jpg";
import agricImage from "../assets/images/agric project.jpg";
import constructionImage from "../assets/images/construction project.jpg";
import trainingImage from "../assets/images/training project.jpg";

interface Project {
    title: string;
    category: string;
    description: string;
    image: string;
}

const projects: Project[] = [
    {
        title: "Media Project",
        category: "Media",
        description:
            "Creative strategy and development for a growing media brand.",
        image: mediaImage,
    },
    {
        title: "Technology Project",
        category: "Technology",
        description:
            "Building a stronger digital presence for a technology-driven business.",
        image: techImage,
    },
    {
        title: "Energy Project",
        category: "Energy",
        description:
            "Strategic communication and creative development for the energy sector.",
        image: energyImage,
    },
    {
        title: "Agriculture Project",
        category: "Agriculture",
        description:
            "Brand and communication solutions designed to create meaningful impact.",
        image: agricImage,
    },
    {
        title: "Construction Project",
        category: "Construction",
        description:
            "A clearer identity and digital experience for a growing company.",
        image: constructionImage,
    },
    {
        title: "Training Project",
        category: "Training",
        description:
            "Creative direction and communication for an education-focused initiative.",
        image: trainingImage,
    },
];

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
                        >
                            <div className="project-card__image">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                />

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