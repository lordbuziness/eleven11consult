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