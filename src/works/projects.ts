import mediaImage from "./assets/images/media project.jpg";
import techImage from "./assets/images/tech project.jpg";
import energyImage from "./assets/images/energy project.jpg";
import agricImage from "./assets/images/agric project.jpg";
import constructionImage from "./assets/images/construction project.jpg";
import trainingImage from "./assets/images/training project.jpg";

import vivonVideo from "./assets/images/VIVON BODY LOTION TV AD_1080p.mp4";
import prividaVideo from "./assets/images/PRIVIDA ENERGY MINI GRID PROJECT_1080p.mp4";
import agricVideo from "./assets/images/SUNTI GOLDEN SUGAR FARM PROJECT DOCUMENTARY RE EDITED_720p.mp4";

export interface Project {
    title: string;
    category: string;
    description: string;
    image: string;
    video?: string;
}

export const projects: Project[] = [
    {
        title: "Media Project",
        category: "Media",
        description:
            "Creative strategy and development for a growing media brand.",
        image: mediaImage,
        video: vivonVideo,
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
        video: prividaVideo,
    },
    {
        title: "Agriculture Project",
        category: "Agriculture",
        description:
            "Brand and communication solutions designed to create meaningful impact.",
        image: agricImage,
        video: agricVideo,
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
