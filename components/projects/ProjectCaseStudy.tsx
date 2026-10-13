import Image from "next/image";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import type { CaseStudy } from "@/data/caseStudies";
import { projects } from "@/data/projects";

type Props = { project: CaseStudy };

function SectionHeading({ number, title }: { number: string; title: string }) {
  return <div className="mb-7"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#62E6CE]">Section {number}</p><h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2></div>;
}

export default function ProjectCaseStudy({ project }: Props) {
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : undefined;
  const nextProject = projectIndex >= 0 && projectIndex < projects.length - 1 ? projects[projectIndex + 1] : undefined;

  return (
    <div className="min-w-0 bg-[#0B1120] text-white">
      <PageContainer className="py-14 sm:py-20 lg:py-24">
        <Link href="/projects" className="inline-flex min-h-11 items-center text-sm font-medium text-[#62E6CE] hover:text-white">← Back to Projects</Link>

        <header className="mt-10 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#62E6CE]">Engineering Case Study</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{project.subtitle}</p>
          <div className="mt-7 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-md border border-slate-700 bg-[#172235] px-3 py-1.5 text-xs font-medium text-slate-300">{tech}</span>)}</div>
        </header>

        <div className="mt-12 grid gap-6 border-y border-slate-700 py-7 sm:grid-cols-3">
          <div><p className="text-xs uppercase tracking-wider text-slate-400">Role</p><p className="mt-2 text-sm font-semibold text-white">{project.role}</p></div>
          <div><p className="text-xs uppercase tracking-wider text-slate-400">Project Status</p><p className="mt-2 text-sm font-semibold text-white">{project.status}</p></div>
          <div><p className="text-xs uppercase tracking-wider text-slate-400">Technical Focus</p><p className="mt-2 text-sm leading-6 text-white">{project.focusAreas.join(", ")}</p></div>
        </div>

        <section aria-label="Project demonstration" className="mt-14 sm:mt-20">
          <SectionHeading number="01" title="Project Demonstration" />
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-700 bg-[#172235]"><Image src={project.coverImage} alt={project.coverAlt} fill priority sizes="(max-width: 1200px) 100vw, 1200px" className="object-contain" /></div>
          {project.youtubeEmbedUrl && <div className="mt-6 aspect-video overflow-hidden rounded-2xl border border-slate-700 bg-black"><iframe src={project.youtubeEmbedUrl} title={`${project.title} demo`} className="h-full w-full" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>}
        </section>

        {project.screenshots && project.screenshots.length > 0 && <section className="mt-16 sm:mt-24"><SectionHeading number="02" title="Media Gallery" /><div className="grid gap-5 md:grid-cols-2">{project.screenshots.map((shot) => <figure key={shot.src} className="overflow-hidden rounded-2xl border border-slate-700 bg-[#172235]"><div className="relative aspect-video"><Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-contain" /></div>{shot.caption && <figcaption className="border-t border-slate-700 px-4 py-3 text-sm leading-6 text-slate-400">{shot.caption}</figcaption>}</figure>)}</div></section>}

        <section className="mt-16 max-w-3xl sm:mt-24"><SectionHeading number="03" title="Project Overview" /><div className="space-y-5">{project.overview.map((paragraph, index) => <p key={index} className="text-base leading-8 text-slate-300">{paragraph}</p>)}</div></section>

        <section className="mt-16 sm:mt-24"><SectionHeading number="04" title="Engineering Challenge" /><p className="max-w-3xl text-base leading-8 text-slate-300">{project.challenge.description}</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{project.challenge.goals.map((goal, index) => <div key={index} className="flex gap-3 rounded-xl border border-slate-700 bg-[#172235] p-5"><span className="font-mono text-sm text-[#62E6CE]">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6 text-slate-300">{goal}</p></div>)}</div></section>

        <section className="mt-16 sm:mt-24"><SectionHeading number="05" title="System Architecture" /><p className="max-w-3xl text-base leading-8 text-slate-300">{project.architecture.introduction}</p>{project.architectureDiagram && <figure className="mt-8 overflow-hidden rounded-2xl border border-slate-700 bg-[#172235]"><div className="relative aspect-video"><Image src={project.architectureDiagram.image} alt={project.architectureDiagram.alt} fill sizes="(max-width: 1200px) 100vw, 1200px" className="object-contain" /></div>{project.architectureDiagram.caption && <figcaption className="border-t border-slate-700 px-5 py-4 text-sm leading-6 text-slate-400">{project.architectureDiagram.caption}</figcaption>}</figure>}<div className="mt-8 grid gap-4 sm:grid-cols-2">{project.architecture.modules.map((module, index) => <article key={module.title} className="rounded-2xl border border-slate-700 bg-[#172235] p-6"><span className="font-mono text-xs text-[#62E6CE]">MODULE {String(index + 1).padStart(2, "0")}</span><h3 className="mt-4 text-lg font-semibold text-white">{module.title}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{module.description}</p></article>)}</div></section>

        <section className="mt-16 sm:mt-24"><SectionHeading number="06" title="Technical Implementation" /><p className="max-w-3xl text-base leading-8 text-slate-300">{project.implementation.introduction}</p><div className="mt-8 divide-y divide-slate-700 rounded-2xl border border-slate-700 bg-[#172235] px-5 sm:px-7">{project.implementation.features.map((feature, index) => <div key={feature.title} className="grid gap-3 py-6 sm:grid-cols-[55px_minmax(0,1fr)]"><span className="font-mono text-sm text-[#62E6CE]">{String(index + 1).padStart(2, "0")}</span><div><h3 className="text-base font-semibold text-white">{feature.title}</h3><p className="mt-2 text-sm leading-7 text-slate-300">{feature.description}</p></div></div>)}</div></section>

        {project.deepDives && project.deepDives.length > 0 && <section className="mt-16 sm:mt-24"><SectionHeading number="07" title="Technical Deep Dive" /><div className="space-y-5">{project.deepDives.map((dive) => <article key={dive.title} className="rounded-2xl border border-slate-700 bg-[#172235] p-6 sm:p-7"><h3 className="text-xl font-semibold text-white">{dive.title}</h3><div className="mt-5 grid gap-5 md:grid-cols-2"><div><p className="text-xs font-semibold uppercase tracking-wider text-[#62E6CE]">Problem</p><p className="mt-2 text-sm leading-7 text-slate-300">{dive.problem}</p></div><div><p className="text-xs font-semibold uppercase tracking-wider text-[#62E6CE]">Solution</p><p className="mt-2 text-sm leading-7 text-slate-300">{dive.solution}</p></div></div>{dive.tradeoff && <p className="mt-5 border-t border-slate-700 pt-5 text-sm leading-7 text-slate-400"><span className="font-semibold text-slate-200">Trade-off: </span>{dive.tradeoff}</p>}{dive.code && <pre className="mt-5 max-w-full overflow-x-auto rounded-xl border border-slate-700 bg-[#0B1120] p-4 text-xs leading-6 text-[#62E6CE]"><code>{dive.code.snippet}</code></pre>}</article>)}</div></section>}

        {project.validation && project.validation.length > 0 && <section className="mt-16 sm:mt-24"><SectionHeading number="08" title="Validation & Known Checks" /><div className="grid gap-4 md:grid-cols-3">{project.validation.map((check) => <article key={check.title} className="rounded-2xl border border-slate-700 bg-[#172235] p-5"><h3 className="text-base font-semibold text-white">{check.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400"><span className="font-semibold text-slate-200">Method: </span>{check.method}</p><p className="mt-3 text-sm leading-6 text-slate-300"><span className="font-semibold text-[#62E6CE]">Result: </span>{check.result}</p></article>)}</div></section>}

        <section className="mt-16 sm:mt-24"><SectionHeading number="09" title="Results & Key Learnings" /><div className="grid gap-5 md:grid-cols-2"><div className="rounded-2xl border border-slate-700 bg-[#172235] p-6"><h3 className="text-lg font-semibold text-white">Outcomes</h3><ul className="mt-5 space-y-4">{project.results.map((result, index) => <li key={index} className="flex items-start gap-3 text-sm leading-7 text-slate-300"><span aria-hidden="true" className="mt-0.5 text-[#62E6CE]">✓</span><span>{result}</span></li>)}</ul></div><div className="rounded-2xl border border-slate-700 bg-[#172235] p-6"><h3 className="text-lg font-semibold text-white">Key Learnings</h3><ul className="mt-5 space-y-4">{project.learnings.map((learning, index) => <li key={index} className="flex items-start gap-3 text-sm leading-7 text-slate-300"><span aria-hidden="true" className="mt-0.5 text-[#62E6CE]">→</span><span>{learning}</span></li>)}</ul></div></div></section>

        <section className="mt-20 border-t border-slate-700 pt-10 sm:mt-28"><div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-xl font-semibold text-white">Explore more engineering work.</h2><p className="mt-2 text-sm text-slate-400">View other projects or get in touch.</p></div><div className="flex flex-wrap gap-3">{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-white hover:border-[#62E6CE]">Source Code ↗</a>}{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-white hover:border-[#62E6CE]">Live Demo ↗</a>}<Link href="/projects" className="inline-flex min-h-11 items-center rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-white hover:border-[#62E6CE]">All Projects</Link><Link href="/contact" className="inline-flex min-h-11 items-center rounded-lg bg-[#62E6CE] px-5 py-3 text-sm font-semibold text-[#0B1120] hover:bg-[#8CF3E0]">Get in Touch</Link></div></div></section>

        <nav aria-label="Project navigation" className="mt-8 grid gap-3 border-t border-slate-700 pt-8 sm:grid-cols-2">
          {previousProject ? <Link href={`/projects/${previousProject.slug}`} className="rounded-xl border border-slate-700 bg-[#172235] p-4 text-sm hover:border-[#62E6CE]"><span className="text-xs uppercase tracking-wider text-slate-500">Previous Project</span><span className="mt-2 block font-semibold text-white">← {previousProject.title}</span></Link> : <span />}
          {nextProject ? <Link href={`/projects/${nextProject.slug}`} className="rounded-xl border border-slate-700 bg-[#172235] p-4 text-right text-sm hover:border-[#62E6CE]"><span className="text-xs uppercase tracking-wider text-slate-500">Next Project</span><span className="mt-2 block font-semibold text-white">{nextProject.title} →</span></Link> : <span />}
        </nav>
      </PageContainer>
    </div>
  );
}
