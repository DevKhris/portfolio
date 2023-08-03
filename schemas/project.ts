import { BiPackage } from "react-icons/bi";
import { defineField } from "sanity";

const project = {
  name: "project",
  title: "Project",
  description: "Project schema",
  type: "document",
  icon: BiPackage,
  fields: [
    defineField({
      name: "name",
      title: "Project",
      type: "string",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "string",
      validation: (rule) => rule.max(60).required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: {
        source: "name",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Project Logo",
      type: "image",
    }),
    defineField({
      name: "projectUrl",
      title: "Project URL",
      type: "url",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "Upload a cover image for this project",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      description: "Write a full description about this project",
      of: [{ type: "block" }],
    }),
  ],
};

export default project;
