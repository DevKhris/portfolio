import { defineField } from "sanity";

const post = {
  name: "post",
  title: "Blog Post",
  type: "document",
  description: "Post content",
  fields: [
    defineField({
      name: "headline",
      type: "string",
      description: "Post title",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "headline",
        maxLength: 200,
      },
      description: "Post slug",
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Post image",
    }),
    defineField({
      name: "description",
      type: "text",
      description: "Post description",
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }],
      description: "Post body",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "profile" }],
      description: "Post author",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      description: "Post tags",
    }),
    defineField({
      name: "metadata",
      title: "Meta Tags",
      type: "object",
      fields: [
        {
          name: "metatitle",
          title: "Meta title",
          type: "string",
        },
        {
          name: "metadescription",
          title: "Meta description",
          type: "text",
        },
        {
          name: "keywords",
          title: "Keywords",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "indexed",
          title: "Indexed",
          type: "boolean",
        },
      ],
      description: "Post metadata for SEO",
    }),
    defineField({
      name: "publishedDate",
      title: "Publication date",
      type: "datetime",
    }),
  ],
};

export default post;
