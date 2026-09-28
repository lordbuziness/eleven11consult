import { urlFor } from "../lib/sanity";
import type { SanityProject } from "./project-grid/project-grid";

interface ProjectMediaProps {
    project: SanityProject;
    className?: string;
}

function ProjectMedia({ project, className }: ProjectMediaProps) {
    if (!project.image) {
        return null;
    }

    const imageUrl =
        typeof project.image === "string"
            ? project.image
            : urlFor(project.image).width(1200).url();

    return (
        <img
            src={imageUrl}
            alt={project.category}
            className={className}
        />
    );
}

export default ProjectMedia;
