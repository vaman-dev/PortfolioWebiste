import type { Metadata } from "next";

import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";
import { caseStudies } from "@/data/caseStudies";

const project = caseStudies["sequence-memory-game"];

export const metadata: Metadata = {
  title: "Global Game Jam 2025 - Bubbleton | Apoorva",
  description: project.subtitle,
};

export default function SequenceMemoryGamePage() {
  return <ProjectCaseStudy project={project} />;
}
