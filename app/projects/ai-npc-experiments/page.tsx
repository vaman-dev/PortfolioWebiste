import type { Metadata } from "next";

import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";
import { caseStudies } from "@/data/caseStudies";
import { createPageMetadata } from "@/lib/seo";

const project = caseStudies["ai-npc-experiments"];

export const metadata: Metadata = createPageMetadata({
  title: project.title,
  description: project.subtitle,
  path: `/projects/${project.slug}`,
  image: project.coverImage,
});

export default function AiNpcExperimentsPage() {
  return <ProjectCaseStudy project={project} />;
}
