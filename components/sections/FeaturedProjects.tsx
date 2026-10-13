
import Image from "next/image";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="featured-projects"
      className="showcase-section relative overflow-hidden pb-12 pt-20 sm:pb-16 sm:pt-24 lg:pt-28"
    >
      {/* Background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl"
      />

      <PageContainer>
        {/* Section heading */}
        <Reveal>
          <div className="mb-10 max-w-3xl sm:mb-12">
            <p className="section-label showcase-label">
              Selected Engineering Work
            </p>

            <h2 className="section-heading mt-4 text-slate-50">
              Systems built to be played,
              <span className="block text-[#62E6CE]">not just seen.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--showcase-muted)]">
              A selection of gameplay systems, interactive AI prototypes, and technical experiments focused on engineering real-time experiences.
            </p>
          </div>
        </Reveal>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 100}
              className="h-full"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block h-full rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#72DDCE]"
                aria-label={`View ${project.title} case study`}
              >
                <article className="showcase-card flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[var(--showcase-accent)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)] motion-reduce:transform-none motion-reduce:transition-none">
                  {/* Image */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:transform-none"
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172235]/30 to-transparent"
                    />
                  </div>

                  {/* Project content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-lg font-semibold tracking-tight text-[var(--showcase-text)] transition-colors duration-300 group-hover:text-[var(--showcase-accent)] sm:text-xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-[var(--showcase-muted)]">
                      {project.summary}
                    </p>

                    {/* Tech stack */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-slate-600/60 bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Project CTA */}
                    <div className="mt-6 flex items-center justify-between border-t border-slate-700/60 pt-5">
                      <span className="text-sm font-semibold text-[#72DDCE]">
                        Explore Case Study
                      </span>

                      <span
                        aria-hidden="true"
                        className="text-lg text-[#72DDCE] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* All projects CTA */}
        <Reveal>
          <div className="mt-12 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-[#72DDCE] hover:text-[#72DDCE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#72DDCE]"
            >
              View All Projects
              <span aria-hidden="true" className="ml-2">
                ↗
              </span>
            </Link>
          </div>
        </Reveal>
      </PageContainer>
    </section>
  );
}
