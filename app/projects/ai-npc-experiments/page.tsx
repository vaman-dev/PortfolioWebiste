import type { Metadata } from "next";

import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";
import { caseStudies } from "@/data/caseStudies";

const project = caseStudies["ai-npc-experiments"];

export const metadata: Metadata = {
  title: "AI NPC Experiments | Apoorva",
  description: project.subtitle,
};

export default function AiNpcExperimentsPage() {
  return <ProjectCaseStudy project={project} />;
}
