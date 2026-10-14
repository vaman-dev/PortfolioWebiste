import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import Reveal from "@/components/ui/Reveal";
import { siteData } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

/* Legacy viewer retained below only as a migration reference.
export function LegacyContactPage() {
  const [scale, setScale] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5));
  const handleResetZoom = () => {
    setScale(1);
    setPanX(0);
    setPanY(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX - panX);
    setStartY(e.clientY - panY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPanX(e.clientX - startX);
      setPanY(e.clientY - startY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="section-space">
      <PageContainer>
        <h1 className="text-4xl font-semibold text-white">Contact</h1>
        <p className="mt-4 max-w-2xl text-neutral-400">
          Open to gameplay programming, XR/simulation, and AI-integrated interactive development opportunities.
        </p>

        <div className="mt-8 space-y-3 text-neutral-300">
          <p>Email: {siteData.email}</p>
          <p>
            GitHub:{" "}
            <a
              href={siteData.socials.github}
              target="_blank"
              className="text-violet-400 hover:text-violet-300"
            >
              {siteData.socials.github}
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href={siteData.socials.linkedin}
              target="_blank"
              className="text-violet-400 hover:text-violet-300"
            >
              {siteData.socials.linkedin}
            </a>
          </p>
        </div>

        <div className="mt-12 border-t border-neutral-700 pt-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Resume</h2>
          
          <div className="mb-4 flex gap-2">
            <button
              onClick={handleZoomIn}
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500"
            >
              🔍+ Zoom In
            </button>
            <button
              onClick={handleZoomOut}
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500"
            >
              🔍- Zoom Out
            </button>
            <button
              onClick={handleResetZoom}
              className="rounded-lg bg-neutral-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-600"
            >
              ↺ Reset
            </button>
            <a
              href="/apoorva resume (1).pdf"
              download
              className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-500"
            >
              ⬇ Download
            </a>
          </div>

          <div
            className="relative h-96 overflow-auto rounded-lg border border-neutral-700 bg-neutral-900"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
            <embed
              src="/apoorva resume (1).pdf"
              type="application/pdf"
              width="100%"
              height="100%"
              style={{
                transform: `scale(${scale}) translate(${panX}px, ${panY}px)`,
                transformOrigin: "0 0",
                transition: isDragging ? "none" : "transform 0.2s",
              }}
            />
          </div>
          
          <p className="mt-2 text-sm text-neutral-500">
            💡 Tip: Use Zoom In/Out buttons to adjust size. Drag to pan around the document.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
*/

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Apoorva Sharma about Unity gameplay programming, game systems engineering, XR, and interactive AI opportunities.",
  path: "/contact",
});

const contactLinks = [
  { number: "01", title: "GitHub", description: "Explore my source code, Unity prototypes, and technical projects.", label: "Explore GitHub", href: siteData.socials.github },
  { number: "02", title: "LinkedIn", description: "Connect professionally and discuss development opportunities.", label: "Connect on LinkedIn", href: siteData.socials.linkedin },
];

export default function ContactPage() {
  return (
    <div className="min-w-0 bg-[#F8FAFC]">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white py-16 sm:py-20 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl" />
        <PageContainer className="relative"><Reveal><div className="max-w-4xl"><p className="section-label text-teal-700">Contact &amp; Opportunities</p><h1 className="mt-5 text-4xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Have a gameplay challenge<span className="block text-teal-700">in mind?</span></h1><p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">I&apos;m interested in gameplay programming, real-time interactive systems, and AI-enhanced experiences. If you&apos;re hiring or working on something relevant, I&apos;d be interested in hearing about it.</p><div className="mt-8 flex flex-wrap gap-3"><a href={`mailto:${siteData.email}`} className="btn-primary">Send an Email <span aria-hidden="true">↗</span></a><Link href="/projects" className="btn-secondary">Explore My Work <span aria-hidden="true">→</span></Link></div></div></Reveal></PageContainer>
      </section>

      <section className="section-space bg-slate-50"><PageContainer><div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]"><Reveal className="h-full"><div className="flex h-full flex-col rounded-2xl border border-slate-700 bg-[#172235] p-6 text-white sm:p-8"><div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl border border-teal-400/30 bg-teal-400/10 text-[#62E6CE]" aria-hidden="true">✉</span><p className="section-label text-[#62E6CE]">Primary Contact</p></div><h2 className="mt-7 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Let&apos;s start a conversation.</h2><p className="mt-4 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">Email is the most direct way to reach me about gameplay programming opportunities, technical projects, or collaborations.</p><a href={`mailto:${siteData.email}`} className="mt-6 break-all text-sm font-medium text-[#62E6CE] hover:underline sm:text-base">{siteData.email}</a><div className="mt-auto pt-8"><a href={`mailto:${siteData.email}`} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#62E6CE] px-6 py-3 text-sm font-semibold text-[#0B1120] transition-colors hover:bg-[#8CF3E0] sm:w-auto">Send Email <span aria-hidden="true">↗</span></a></div></div></Reveal><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">{contactLinks.map((item, index) => <Reveal key={item.title} delay={index * 80} className="h-full"><a href={item.href} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg motion-reduce:transform-none sm:p-7"><div className="flex items-center justify-between"><span className="font-mono text-xs font-bold text-teal-700">{item.number}</span><span aria-hidden="true" className="text-lg text-teal-700 transition-transform group-hover:translate-x-1">↗</span></div><h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3><p className="mt-2 flex-1 text-sm leading-7 text-slate-600">{item.description}</p><span className="mt-5 text-sm font-semibold text-teal-800">{item.label}</span></a></Reveal>)}</div></div></PageContainer></section>

      <section id="resume" className="border-t border-slate-200 bg-white py-16 sm:py-20 lg:py-24"><PageContainer><Reveal><div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div className="max-w-2xl"><p className="section-label text-teal-700">Professional Resume</p><h2 className="section-heading mt-4 text-slate-950">Experience, skills,<span className="block text-teal-700">and technical work.</span></h2><p className="mt-5 text-base leading-8 text-slate-600">Review my resume for more information about my development experience, technical skills, and projects.</p></div><div className="flex flex-col gap-3 sm:flex-row"><a href={siteData.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">View Resume <span aria-hidden="true">↗</span></a><a href={siteData.resumeUrl} download="Apoorva_Resume.pdf" className="btn-primary">Download PDF <span aria-hidden="true">↓</span></a></div></div></Reveal><Reveal><div className="mt-10 hidden overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_18px_48px_rgba(15,23,42,0.08)] md:block"><div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4"><div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-teal-500" /><p className="text-sm font-semibold text-slate-800">Resume Preview</p></div><span className="text-xs text-slate-500">PDF Document</span></div><iframe src={`${siteData.resumeUrl}#toolbar=1&navpanes=0`} title="Apoorva resume preview" loading="lazy" className="h-[650px] w-full border-0 bg-white lg:h-[780px]" /></div></Reveal><div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center md:hidden"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700" aria-hidden="true">▤</div><h3 className="mt-4 text-lg font-semibold text-slate-900">View My Resume</h3><p className="mx-auto mt-2 max-w-sm text-sm leading-7 text-slate-600">Open the PDF in your browser or download a copy to your device.</p><a href={siteData.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 w-full">Open Resume <span aria-hidden="true">↗</span></a></div></PageContainer></section>

      <section className="bg-[#0B1120] py-16 sm:py-20"><PageContainer><Reveal><div className="text-center"><p className="section-label text-[#62E6CE]">Explore My Work</p><h2 className="mx-auto mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">Want to see the systems behind the projects?</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300">Explore my gameplay projects, technical prototypes, and engineering case studies.</p><Link href="/projects" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#62E6CE] px-7 py-3 text-sm font-semibold text-[#0B1120] transition-colors hover:bg-[#8CF3E0]">Explore Projects <span aria-hidden="true" className="ml-2">↗</span></Link></div></Reveal></PageContainer></section>
    </div>
  );
}
