import { urlFor } from "../lib/sanity";
import type { SanityImageSource } from "@sanity/image-url";

interface ProjectMediaProps {
    project: {
        category: string;
        image?: string | SanityImageSource;
    };
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
