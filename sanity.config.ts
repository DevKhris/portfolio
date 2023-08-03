import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { portfolioConfig } from "@/config/portfolio.config";

export default defineConfig({
  name: "default",
  title: portfolioConfig.sanity.projectTitle,

  projectId: portfolioConfig.sanity.projectId,
  dataset: portfolioConfig.sanity.dataSet,

  basePath: "/backoffice",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
