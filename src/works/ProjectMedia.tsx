import type { Project } from "../projects";

interface ProjectMediaProps {
    project: Project;
    className?: string;
}

function ProjectMedia({ project, className }: ProjectMediaProps) {
    if (project.video) {
        return (
            <video
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                className={className}
            />
        );
    }

    return (
        <img
            src={project.image}
            alt={project.title}
            className={className}
        />
    );
}

export default ProjectMedia;
