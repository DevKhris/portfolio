import { defineConfig, Studio } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';
import { portfolioConfig } from '@/config/portfolio.config';

export default defineConfig({
  projectId: portfolioConfig.sanity.projectId,
  dataset: portfolioConfig.sanity.dataSet,
  name: 'default',
  basePath: '/backoffice',
  title: portfolioConfig.sanity.projectTitle,
  subtitle: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
  // deployment: {
  //   app: portfolioConfig.sanity.appId,
  //   autoUpdates: true,
  // },
});
