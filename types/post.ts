import { PortableTextBlock } from "sanity";

export type PostType = {
  _id: string;
  headline: string;
  slug: string;
  image: {
    alt: string;
    url: string;
  };
  description: string;
  body: PortableTextBlock[];
  author: {
    fullName: string;
    profileImage: {
      url: string;
    };
  };
  tags: string[];
  metadata: {
    metatitle: string;
    metadescription: string;
    keywords: string[];
    index: boolean;
  };
  publishedDate: Date;
};
