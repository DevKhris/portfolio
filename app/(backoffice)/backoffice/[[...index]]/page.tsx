"use client";
import type { Metadata } from "next";
import { metadata as studioMeta } from "next-sanity/studio/metadata";
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export const metadata: Metadata = {
  ...studioMeta,
};

export default function BackOffice() {
  return (
    <>
      <NextStudio config={config} />
    </>
  );
}
