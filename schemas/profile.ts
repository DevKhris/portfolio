import { defineField } from "sanity";
import { BiUser } from "react-icons/bi";

const profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "Short description of what you do",
      validation: (rule) => rule.required().min(30).max(60),
    }),
    defineField({
      name: "profileImage",
      title: "Profile image",
      type: "image",
      description: "Upload a profile picture",
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
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "fullBio",
      title: "Full Biography",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Networks",
      type: "object",
      description: "Add your social media links:",
      fields: [
        {
          name: "github",
          title: "GitHub URL",
          type: "url",
          initialValue: "https://github.com/",
        },
        {
          name: "linkedin",
          title: "Linkedin URL",
          type: "url",
          initialValue: "https://linkedin.com/in/",
        },
        {
          name: "twitter",
          title: "Twitter URL",
          type: "url",
          initialValue: "https://twitter.com/",
        },
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    }),
    defineField({
      name: "skills",
      title: "Hard Skills",
      type: "array",
      description: "Add a list of core skills",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "soft_skills",
      title: "Soft Skills",
      type: "array",
      description: "Add a list of soft skills",
      of: [{ type: "string"}],
    }),
    defineField({
      name: "resume",
      title: "Resume",
      type: "file",
      description: "Add resume for download",
    }),
  ],
};

export default profile;
