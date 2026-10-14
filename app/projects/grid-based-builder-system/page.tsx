import PageContainer from "@/components/layout/PageContainer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";
import { caseStudies } from "@/data/caseStudies";
import { createPageMetadata } from "@/lib/seo";

function LegacyGridBasedBuilderSystemPage() {
  return (
    <section className="section-space">
      <PageContainer>
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-block mb-8 text-violet-400 hover:text-violet-300 transition-colors"
        >
          ← Back to Projects
        </Link>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-semibold text-white mb-4">
          Grid-Based Builder System
        </h1>

        {/* Subtitle / Intro */}
        <p className="text-xl text-neutral-300 max-w-3xl mb-12 leading-8">
          A Unity technical prototype built to explore clean gameplay architecture through grid placement, footprint validation, and scalable building systems.
        </p>

        {/* Meta Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-neutral-700 pt-8 mb-12">
          <div>
            <p className="text-sm text-neutral-400 mb-2">Role</p>
            <p className="text-white font-semibold">Gameplay Systems Programmer</p>
          </div>
          <div>
            <p className="text-sm text-neutral-400 mb-2">Technologies</p>
            <p className="text-white font-semibold">Unity, C#, ScriptableObjects</p>
          </div>
          <div>
            <p className="text-sm text-neutral-400 mb-2">Focus Areas</p>
            <p className="text-white font-semibold">Architecture, Grid Systems</p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full h-96 rounded-lg overflow-hidden mb-12">
          <Image
            src="/images/GridGame.png?v=2"
            alt="Grid-Based Builder System"
            width={900}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Full Description */}
        <div className="max-w-3xl space-y-6 text-neutral-300 leading-8">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">The Project</h2>
            <p>
              This project is a grid-based builder system prototype developed in Unity to practically explore OOP, gameplay architecture, and modular systems design. Inspired by builder games like Clash of Clans and SimCity, the focus was not just on replicating placement mechanics, but on understanding how to structure gameplay systems cleanly and scalably.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Technical Implementation</h2>
            <p>
              The MVP includes a pure C# grid system for world-to-grid conversion, tile occupancy tracking, tile bounds handling, and support for multi-tile building placement. It also features rotation-aware footprints, placement validation, ghost previews, pooled footprint visualization, and a UI-driven building selection flow powered by ScriptableObjects.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Key Learnings</h2>
            <p>
              This project helped strengthen my understanding of responsibility separation, SRP-based system design, data-driven workflows, object pooling, and the practical application of architecture patterns in gameplay programming. It also establishes a solid foundation for future expansion into road connectivity, economy systems, and simulation-style interactions.
            </p>
          </div>

          <div className="border-t border-neutral-700 pt-8 mt-8">
            <h3 className="text-lg font-semibold text-white mb-4">Core Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">→</span>
                <span>Pure C# grid system with world-to-grid conversion</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">→</span>
                <span>Tile occupancy tracking and bounds handling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">→</span>
                <span>Multi-tile building placement with rotation support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">→</span>
                <span>Rotation-aware footprints and placement validation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">→</span>
                <span>Ghost previews and pooled visualization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">→</span>
                <span>ScriptableObject-driven UI building selection</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Video */}
        <div className="w-full h-96 rounded-lg overflow-hidden mb-12">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/yF2ZGbEtXm0"
            title="Grid-Based Builder System Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        {/* CTA */}
        <div className="mt-16 pt-8 border-t border-neutral-700">
          <p className="text-neutral-400 mb-4">Want to discuss this project or similar work?</p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            Get In Touch
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}

void LegacyGridBasedBuilderSystemPage;

const project = caseStudies["grid-based-builder-system"];

export const metadata: Metadata = createPageMetadata({
  title: project.title,
  description: project.subtitle,
  path: `/projects/${project.slug}`,
  image: project.coverImage,
});

export default function GridBasedBuilderSystemPage() {
  return <ProjectCaseStudy project={project} />;
}
