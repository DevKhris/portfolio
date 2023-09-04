import { PortableTextBlock } from "sanity";

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  tags: string;
  projectUrl: string;
  logo: string;
  coverImage: {
    alt: string;
    image: string;
  };
  description: PortableTextBlock[];
  skills: string[];
};
