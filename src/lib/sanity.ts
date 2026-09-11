import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "qkx1cjb0",
  dataset: "production",
  apiVersion: "2026-09-11",
  useCdn: true,
});