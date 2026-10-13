import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import Reveal from "@/components/ui/Reveal";
import { siteData } from "@/data/site";

export function LegacyContactCTA() {
  return (
    <section className="section-space">
      <PageContainer>
        <Reveal>
          <div className="rounded-2xl border border-slate-700 bg-[#172235] px-6 py-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.2)] md:px-12">
            <p className="section-label text-[#62E6CE]">Open to opportunities</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Let&apos;s build something players remember.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-400">
              Currently open to gameplay engineering roles and technical collaborations.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Get in Touch <span aria-hidden="true">↗</span>
              </Link>
              <a href={siteData.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">View Resume <span aria-hidden="true">↗</span></a>
            </div>
            <div className="mt-6 flex justify-center gap-5 text-sm text-slate-400">
              <a href={siteData.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#62E6CE]">GitHub ↗</a>
              <a href={siteData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#62E6CE]">LinkedIn ↗</a>
              <a href={`mailto:${siteData.email}`} className="hover:text-[#62E6CE]">Email ↗</a>
            </div>
          </div>
        </Reveal>
      </PageContainer>
    </section>
  );
}

export default function ContactCTA() {
  return (
    <section id="contact-cta" className="relative overflow-hidden bg-[#0B1120] py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 max-w-full -translate-x-1/2 rounded-full bg-teal-400/5 blur-3xl" />
      <PageContainer>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-[#172235] px-5 py-12 text-center shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:px-10 sm:py-16 lg:px-16">
            <div className="flex items-center justify-center gap-2"><span className="h-2 w-2 rounded-full bg-[#62E6CE]" /><p className="section-label text-[#62E6CE]">Open to Opportunities</p></div>
            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">Let&apos;s build something<span className="block text-[#62E6CE]">players remember.</span></h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">Interested in gameplay programming, real-time interactive systems, or technical collaborations? Explore my work or get in touch.</p>
            <div className="mx-auto mt-9 flex max-w-md flex-col items-stretch justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#62E6CE] px-6 py-3 text-sm font-semibold text-[#0B1120] transition-colors duration-200 hover:bg-[#8CF3E0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#62E6CE]">Get in Touch <span aria-hidden="true">↗</span></Link>
              <a href={siteData.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-500 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#62E6CE] hover:bg-slate-700/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#62E6CE]">View Resume <span aria-hidden="true">↗</span></a>
            </div>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 border-t border-slate-700/70 pt-7 text-sm text-slate-300">
              <a href={siteData.socials.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#62E6CE]">GitHub ↗</a>
              <a href={siteData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#62E6CE]">LinkedIn ↗</a>
              <a href={`mailto:${siteData.email}`} className="transition-colors hover:text-[#62E6CE]">Email ↗</a>
            </div>
          </div>
        </Reveal>
      </PageContainer>
    </section>
  );
}
