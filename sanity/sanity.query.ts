import { groq } from "next-sanity";
import client from "./sanity.client";
import type { ProfileType } from "@/types/profile";
import type { SkillType } from "@/types/skills";
import type { ExperienceType } from "./../types/experience";
import type { ProjectType } from "@/types/project";
import type { PostType } from "@/types/post";

export async function getProfile(): Promise<ProfileType[]> {
  return client.fetch(groq`*[_type == "profile"]{
    _id,
    fullName,
    headline,
    profileImage {alt, "image": asset->url},
    shortBio,
    email,
    "resumeURL": resume.asset->url,
    socialLinks,
  }`);
}

export async function getSkills(): Promise<SkillType[]> {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      skills
    }`
  );
}

export async function getExperience(): Promise<ExperienceType[]> {
  return client.fetch(
    groq`*[_type == "experience"]{
      _id,
      name,
      title,
      "logo": logo.asset->url,
      url,
      description,
      startDate,
      endDate,
    }`
  );
}

export async function getProjects(): Promise<ProjectType[]> {
  return client.fetch(
    groq`*[_type == "project"]{
    _id,
    name,
    "slug": slug.current,
    coverImage { alt, "image": asset->url },
    tags,
    "logo": logo.asset->url
  }`
  );
}

export async function getProject(slug: string): Promise<ProjectType> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    name,
    projectUrl,
    coverImage { alt, "image": asset->url },
    tags,
    description
  }`,
    { slug }
  );
}

export async function getArticles(): Promise<PostType[]> {
  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      headline,
      "slug": slug.current,
      image { "alt": headline, "url": asset->url},
      description,
      author->{
          fullName, profileImage { "url": asset->url }
      },
      tags,
      publishedDate
    }`
  );
}

export async function getArticle(slug: string): Promise<PostType> {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      headline,
      image { "alt": headline, "url": asset->url},
      body,
      author->{
          fullName, profileImage { "url": asset->url }
      },
      tags,
      metadata,
      publishedDate
    }`,
    { slug }
  );
}
