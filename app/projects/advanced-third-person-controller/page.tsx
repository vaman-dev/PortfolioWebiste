import type { Metadata } from "next";

import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";
import { caseStudies } from "@/data/caseStudies";

const project = caseStudies["advanced-third-person-controller"];

export const metadata: Metadata = {
  title: "VR Desert Experience -Soldier's Perspective | Apoorva",
  description: project.subtitle,
};

export default function AdvancedThirdPersonControllerPage() {
  return <ProjectCaseStudy project={project} />;
}
