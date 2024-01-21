import sanityClient from "@sanity/client";
import imageBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "8b4pirec",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-20",
});

const builder = imageBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
