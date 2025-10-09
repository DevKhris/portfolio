import { portfolioConfig } from '@/config/portfolio.config';
import { type ClientConfig, SanityClient } from '@sanity/client';
import { createClient } from 'next-sanity';
import { defineLive } from 'next-sanity';

const config: ClientConfig = {
  projectId: portfolioConfig.sanity.projectId,
  dataset: portfolioConfig.sanity.dataSet,
  apiVersion: '2023-07-29',
  useCdn: portfolioConfig.sanity.useCdn,
  // stega: { stegaUrl: '/backoffice' },
};

const client: SanityClient = createClient(config);

export default client;
