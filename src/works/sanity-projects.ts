import { sanityClient } from "../lib/sanity";

export const allProjectsQuery = `
    *[_type == "project"] | order(category asc) {
        _id,
        category,
        description,
        image,
        slug,
        "title": select(
            category == "media" => "Media Project",
            category == "agriculture" => "Agriculture Project",
            category == "energy" => "Energy Project",
            category == "construction" => "Construction Project",
            category == "technology" => "Technology Project",
            category == "training" => "Training Project"
        )
    }
`;

export async function getProjects() {
    return sanityClient.fetch(allProjectsQuery);
}
