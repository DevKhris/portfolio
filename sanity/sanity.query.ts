import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(groq`*[_type == "profile"]{
    _id,
    fullName,
    headline,
    profileImage {alt, "image": asset->url},
    shortBio,
    location,
    fullBio,
    email,
    "resumeURL": resumeURL.asset->url,
    socialLinks,
    skills,
  }`);
}

export async function getExperience() {
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

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
    _id,
    name,
    "slug": slug.current,
    tags,
    "logo": logo.asset->url
  }`
  );
}

export async function getProject(slug: string) {
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

export async function getArticles() {
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

export async function getArticle(slug: string) {
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
