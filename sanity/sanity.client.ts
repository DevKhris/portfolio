import { portfolioConfig } from "@/config/portfolio.config";
import { createClient, type ClientConfig, SanityClient } from "@sanity/client";

const config: ClientConfig = {
  projectId: portfolioConfig.sanity.projectId,
  dataset: portfolioConfig.sanity.dataSet,
  apiVersion: "2023-07-29",
  useCdn: portfolioConfig.sanity.useCdn,
};

const client: SanityClient = createClient(config);

export default client;
