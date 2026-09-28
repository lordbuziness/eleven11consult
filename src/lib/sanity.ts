import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const sanityClient = createClient({
    projectId: "qkx1cjb0",
    dataset: "production",
    apiVersion: "2026-09-11",
    useCdn: false,
});

const imageBuilder = createImageUrlBuilder(sanityClient);

export function urlFor(source: unknown) {
    return imageBuilder.image(source);
}
