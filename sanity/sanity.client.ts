import { portfolioConfig } from "@/config/portfolio.config";
import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: portfolioConfig.sanity.projectId,
  dataset: portfolioConfig.sanity.dataSet,
  apiVersion: "2023-07-29",
  useCdn: portfolioConfig.sanity.useCdn,
};

const client = createClient(config);

export default client;
