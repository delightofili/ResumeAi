import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://delresumeai.vercel.app",
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
