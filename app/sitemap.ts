import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/about", "/projects", "/contact"];
  const projectRoutes = projects.map(
    (project) => `/projects/${project.slug}`
  );

  return [...staticRoutes, ...projectRoutes].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path.startsWith("/projects/") ? 0.8 : 0.6,
  }));
}
