import type { Metadata } from "next";

import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";
import { caseStudies } from "@/data/caseStudies";
import { createPageMetadata } from "@/lib/seo";

const project = caseStudies["sequence-memory-game"];

export const metadata: Metadata = createPageMetadata({
  title: project.title,
  description: project.subtitle,
  path: `/projects/${project.slug}`,
  image: project.coverImage,
});

export default function SequenceMemoryGamePage() {
  return <ProjectCaseStudy project={project} />;
}
