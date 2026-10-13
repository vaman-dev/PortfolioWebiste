import PageContainer from "@/components/layout/PageContainer";
import Link from "next/link";

export default function AiNpcExperimentsPage() {
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
          AI NPC Experiments
        </h1>

        {/* Subtitle / Intro */}
        <p className="text-xl text-neutral-300 max-w-3xl mb-12 leading-8">
          Prototype work exploring AI-enhanced gameplay interactions, behavior systems, and intelligent player responses.
        </p>

        {/* Meta Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-neutral-700 pt-8 mb-12">
          <div>
            <p className="text-sm text-neutral-400 mb-2">Role</p>
            <p className="text-white font-semibold">Gameplay / AI Programmer</p>
          </div>
          <div>
            <p className="text-sm text-neutral-400 mb-2">Technologies</p>
            <p className="text-white font-semibold">Unity, Python, AI Integration</p>
          </div>
          <div>
            <p className="text-sm text-neutral-400 mb-2">Focus Areas</p>
            <p className="text-white font-semibold">AI Systems, NPC Behavior</p>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="w-full h-96 bg-neutral-800 rounded-lg border border-neutral-700 flex items-center justify-center mb-12">
          <div className="text-center">
            <p className="text-neutral-400">Project Image Placeholder</p>
            <p className="text-sm text-neutral-500 mt-2">Add image here</p>
          </div>
        </div>

        {/* Full Description */}
        <div className="max-w-3xl space-y-6 text-neutral-300 leading-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">The Project</h2>
            <p>
              Add detailed project description here. Explain the AI experiments, NPC behaviors, and how AI enhances gameplay interactions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Technical Implementation</h2>
            <p>
              Describe how AI was integrated into the gameplay systems, the algorithms used, and the architecture for managing NPC behaviors.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Key Learnings</h2>
            <p>
              Share insights about AI integration, behavior trees, decision making systems, and how this project explored the intersection of AI and gameplay.
            </p>
          </div>

          <div className="border-t border-neutral-700 pt-8 mt-8">
            <h3 className="text-lg font-semibold text-white mb-4">Core Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">→</span>
                <span>Add feature 1</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">→</span>
                <span>Add feature 2</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">→</span>
                <span>Add feature 3</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="w-full h-96 bg-neutral-800 rounded-lg border border-neutral-700 flex items-center justify-center mb-12">
          <div className="text-center">
            <p className="text-neutral-400">Project Video/Demo Placeholder</p>
            <p className="text-sm text-neutral-500 mt-2">Add video/iframe here</p>
          </div>
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
