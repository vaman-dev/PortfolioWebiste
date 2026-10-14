import type { Metadata } from "next";

import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";
import { caseStudies } from "@/data/caseStudies";

const project = caseStudies["child-game"];

export const metadata: Metadata = {
  title: "ChildGame | Apoorva",
  description: project.subtitle,
};

export default function ChildGamePage() {
  return <ProjectCaseStudy project={project} />;
}
