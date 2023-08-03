import { BiBriefcase } from "react-icons/bi";
import { defineField } from "sanity";
const experience = {
  name: "experience",
  title: "Experience",
  type: "document",
  icon: BiBriefcase,
  fields: [
    defineField({
      name: "name",
      title: "Company name",
      type: "string",
      description: "",
    }),
    defineField({
      name: "title",
      title: "title",
      type: "string",
      description: "Enter the job title. E.g: Software Developer",
    }),
    defineField({
      name: "logo",
      title: "Company logo",
      type: "image",
    }),
    defineField({
      name: "url",
      title: "Company website",
      type: "url",
    }),
    defineField({
      name: "description",
      title: "Job description",
      type: "text",
      rows: 3,
      description: "Write a brief description about this role",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
    }),
  ],
};

export default experience;
