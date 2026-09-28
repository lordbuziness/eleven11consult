export const featuredInsightsQuery = `
  *[
    _type == "insight" &&
    featured == true
  ] | order(_createdAt desc) {
    _id,
    title,
    category,
    excerpt,
    slug,
    image
  }
`;

export const insightBySlugQuery = `
  *[
    _type == "insight" &&
    slug.current == $slug
  ][0] {
    _id,
    title,
    category,
    excerpt,
    content,
    image
  }
`;
export const allInsightsQuery = `
    *[
        _type == "insight"
    ] | order(_createdAt desc) {
        _id,
        title,
        category,
        image,
        slug,
        featured
    }
`;
export const allProjectsQuery = `
  *[
    _type == "project"
  ] | order(_createdAt desc) {
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

export const projectBySlugQuery = `
  *[
    _type == "project" &&
    slug.current == $slug
  ][0] {
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
    ),
    "items": select(
      category == "media" => media[]{
        _key,
        title,
        url,
        thumbnail
      },
      category == "agriculture" => agriculture[]{
        _key,
        title,
        url,
        thumbnail
      },
      category == "energy" => energy[]{
        _key,
        title,
        url,
        thumbnail
      },
      category == "construction" => construction[]{
        _key,
        title,
        url,
        thumbnail
      },
      category == "technology" => technology[]{
        _key,
        title,
        url,
        thumbnail
      },
      category == "training" => training[]{
        _key,
        title,
        url,
        thumbnail
      }
    )
  }
`;
