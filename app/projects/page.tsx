import PageContainer from "@/components/layout/PageContainer";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

/*
function LegacyProjectsPage() {
  return (
    <section className="section-space">
      <PageContainer>
        <h1 className="text-4xl font-semibold text-white">Projects</h1>
        <p className="mt-4 max-w-2xl text-neutral-400">
          A curated collection of gameplay systems, interaction-driven prototypes,
          AR/XR experiments, and AI-enhanced development work.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group"
            >
              <article className="glass-panel overflow-hidden rounded-3xl transition-all hover:border-violet-500">
                <div className="relative h-52 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm text-violet-400">{project.role}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-400">
                    {project.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2 py-1 rounded bg-neutral-800 text-neutral-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 inline-block text-sm font-medium text-white group-hover:text-violet-300 transition-colors">
                    View Case Study →
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
*/

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Gameplay programming projects, Unity systems, interactive AI experiments, and XR prototypes by Apoorva Sharma.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      <PageContainer className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="section-label text-[#62E6CE]">Engineering Portfolio</p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Projects &amp; Technical<span className="block text-[#62E6CE]">Experiments.</span></h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">A collection of gameplay systems, Unity prototypes, and interactive experiences focused on practical engineering challenges.</p>
        </div>
        <div className="mt-12 flex items-center justify-between border-b border-slate-700 pb-5"><p className="text-sm font-semibold text-white">All Projects</p><span className="font-mono text-xs text-slate-400">{projects.length} Projects</span></div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group block h-full rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#62E6CE]">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700 bg-[#172235] transition-all duration-300 hover:-translate-y-1 hover:border-[#62E6CE] motion-reduce:transform-none motion-reduce:transition-none">
                <div className="relative aspect-video overflow-hidden bg-slate-900"><Image src={project.image} alt={`${project.title} project preview`} fill loading={project.slug === "ai-npc-experiments" ? "eager" : "lazy"} sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none" /></div>
                <div className="flex flex-1 flex-col p-5 sm:p-6"><p className="text-xs font-semibold text-[#62E6CE]">{project.role}</p><h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">{project.title}</h2><p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{project.summary}</p><div className="mt-6 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-md border border-slate-600 bg-slate-800/70 px-3 py-1.5 text-xs text-slate-300">{tech}</span>)}</div><div className="mt-7 flex items-center justify-between border-t border-slate-700 pt-5"><span className="text-sm font-semibold text-[#62E6CE]">Explore Case Study</span><span aria-hidden="true" className="text-[#62E6CE] transition-transform group-hover:translate-x-1">→</span></div></div>
              </article>
            </Link>
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
