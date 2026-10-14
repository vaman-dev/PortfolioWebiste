import type { Metadata } from "next";

import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";
import { caseStudies } from "@/data/caseStudies";
import { createPageMetadata } from "@/lib/seo";

const project = caseStudies["child-game"];

export const metadata: Metadata = createPageMetadata({
  title: project.title,
  description: project.subtitle,
  path: `/projects/${project.slug}`,
  image: project.coverImage,
});

export default function ChildGamePage() {
  return <ProjectCaseStudy project={project} />;
}
