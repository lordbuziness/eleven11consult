import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

export const sanityClient = createClient({
    projectId: "qkx1cjb0",
    dataset: "production",
    apiVersion: "2025-01-01",
    useCdn: true,
});

const imageBuilder = createImageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
    return imageBuilder.image(source);
}
