import { Configuration } from '@/types/configuration';

export const portfolioConfig: Configuration = {
  //  Sanity Config
  sanity: {
    projectTitle: process.env.NEXT_PUBLIC_SANITY_PROJECT_NAME!,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataSet: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    useCdn: true,
  },
};
