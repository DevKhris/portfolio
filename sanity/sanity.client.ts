import { createClient, type ClientConfig } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const config: ClientConfig = {
  projectId: projectId,
  dataset: dataset,
  apiVersion: "2023-07-29",
  useCdn: false,
};

const client = createClient(config);

export default client;
