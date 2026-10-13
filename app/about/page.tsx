import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import Reveal from "@/components/ui/Reveal";
import { siteData } from "@/data/site";

export const metadata: Metadata = {
  title: "About | Apoorva",
  description: "Learn about Apoorva's background in Unity gameplay programming, interactive AI, XR development, and software engineering.",
};

const experience = [
  { organization: "Direction Educare", position: "Unity Development Experience", description: "Worked on interactive applications using Unity, gaining experience in gameplay implementation, technical problem-solving, and development workflows.", type: "Industry Experience" },
  { organization: "IDZ Digital", position: "Development Internship", description: "Further experience in a professional development environment, working on software implementation and practical engineering responsibilities.", type: "Industry Experience" },
  { organization: "AIT AR-VR & Game Development Club", position: "Student Club Leadership", description: "Contributed to technical initiatives, collaborative activities, and student engagement around game development and immersive technologies.", type: "Leadership" },
];

const focusAreas = [
  { number: "01", title: "Gameplay Programming", description: "Designing player mechanics, movement systems, interactions, and gameplay features in Unity.", tags: ["Unity", "C#", "Player Systems"] },
  { number: "02", title: "Systems Architecture", description: "Building modular and maintainable systems with clear separation of responsibilities.", tags: ["OOP", "FSM", "Game Systems"] },
  { number: "03", title: "Interactive AI", description: "Exploring AI-driven NPCs, conversational interactions, and computer vision within real-time applications.", tags: ["AI Integration", "Python", "NPC Systems"] },
  { number: "04", title: "Immersive Technology", description: "Developing interactive experiences and prototypes for augmented and virtual reality.", tags: ["XR", "Meta Quest", "Unity"] },
];

const principles = [
  { number: "01", title: "Prototype early", description: "Validate the core interaction before committing to a larger architecture." },
  { number: "02", title: "Separate responsibilities", description: "Keep input, state management, simulation, and visual presentation understandable." },
  { number: "03", title: "Design for iteration", description: "Favor systems that can be tuned, extended, and debugged without unnecessary rewrites." },
  { number: "04", title: "Test the experience", description: "Use functional testing and playtesting to identify problems with mechanics and player feedback." },
];

export default function AboutPage() {
  return (
    <div className="min-w-0 overflow-hidden bg-[#F8FAFC]">
      <section className="relative border-b border-slate-200 bg-white py-16 sm:py-20 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl" />
        <PageContainer className="relative"><div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="hero-slide-left"><p className="section-label text-teal-700">About Me</p><h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">I build the systems<span className="block text-teal-700">behind interactive experiences.</span></h1><p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">I&apos;m {siteData.name}, a Unity Gameplay Programmer with interests in gameplay architecture, character systems, interactive AI, and immersive technology.</p><p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">I&apos;m pursuing engineering studies in Automation and Robotics at the Army Institute of Technology, Pune, while developing gameplay projects and exploring how software engineering principles apply to real-time interactive systems.</p><div className="mt-9 flex flex-wrap gap-3"><Link href="/projects" className="btn-primary">Explore My Work <span aria-hidden="true">↗</span></Link><a href={siteData.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">View Resume <span aria-hidden="true">↗</span></a></div></div>
          <div className="hero-slide-right mx-auto w-full max-w-md lg:ml-auto"><div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.12)] sm:p-4"><div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-200"><Image src="/images/PortfolioImage.png" alt="Portrait of Apoorva" fill sizes="(max-width: 1023px) 90vw, 400px" className="object-cover" /></div><div className="flex flex-wrap items-center justify-between gap-3 px-2 pb-2 pt-5"><div><p className="text-base font-semibold text-slate-900">{siteData.name}</p><p className="mt-1 text-xs text-slate-500">{siteData.role}</p></div><span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-2 text-xs font-medium text-teal-800">Unity / C#</span></div></div></div>
        </div></PageContainer>
      </section>

      <section className="section-space bg-slate-50"><PageContainer><Reveal><div className="max-w-3xl"><p className="section-label text-teal-700">My Background</p><h2 className="section-heading mt-4 text-slate-950">From engineering concepts<span className="block text-slate-500">to playable systems.</span></h2><p className="mt-6 text-base leading-8 text-slate-600">My development interests sit at the intersection of software engineering, gameplay programming, and real-time interaction.</p><p className="mt-4 text-base leading-8 text-slate-600">Working on Unity projects has helped me understand the importance of player feedback, technical constraints, modular design, and the ability to continuously improve a working system.</p></div></Reveal></PageContainer></section>

      <section className="bg-white py-20 sm:py-24"><PageContainer><Reveal><p className="section-label text-teal-700">Experience &amp; Leadership</p><h2 className="section-heading mt-4 text-slate-950">Building experience through<span className="text-teal-700"> real projects.</span></h2></Reveal><div className="mt-12 grid gap-5 lg:grid-cols-3">{experience.map((item, index) => <Reveal key={item.organization} delay={index * 80} className="h-full"><article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-teal-300 sm:p-7"><span className="text-xs font-semibold uppercase tracking-wider text-teal-700">{item.type}</span><h3 className="mt-5 text-xl font-semibold text-slate-900">{item.organization}</h3><p className="mt-2 text-sm font-medium text-slate-700">{item.position}</p><p className="mt-5 flex-1 text-sm leading-7 text-slate-600">{item.description}</p></article></Reveal>)}</div><div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6"><p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Education</p><h3 className="mt-3 text-lg font-semibold text-slate-900">Army Institute of Technology, Pune</h3><p className="mt-2 text-sm leading-7 text-slate-600">Undergraduate engineering studies in Automation and Robotics.</p></div></PageContainer></section>

      <section className="bg-[#0B1120] py-20 text-white sm:py-24 lg:py-28"><PageContainer><Reveal><div className="max-w-3xl"><p className="section-label text-[#62E6CE]">Technical Specialization</p><h2 className="section-heading mt-4 text-white">What I focus on building.</h2><p className="mt-5 text-base leading-8 text-slate-300">My work spans gameplay programming, reusable technical systems, AI integration, and immersive experiences.</p></div></Reveal><div className="mt-10 grid gap-5 md:grid-cols-2">{focusAreas.map((area, index) => <Reveal key={area.number} delay={index * 80} className="h-full"><article className="flex h-full flex-col rounded-2xl border border-slate-700 bg-[#172235] p-6 transition-colors hover:border-[#62E6CE]/60 sm:p-7"><span className="font-mono text-xs text-[#62E6CE]">{area.number}</span><h3 className="mt-4 text-xl font-semibold text-white">{area.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{area.description}</p><div className="mt-6 flex flex-wrap gap-2">{area.tags.map((tag) => <span key={tag} className="rounded-md border border-slate-600 bg-slate-800/60 px-3 py-1.5 text-xs text-slate-200">{tag}</span>)}</div></article></Reveal>)}</div></PageContainer></section>

      <section className="section-space bg-slate-50"><PageContainer><div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"><Reveal><div className="max-w-lg"><p className="section-label text-teal-700">Engineering Mindset</p><h2 className="section-heading mt-4 text-slate-950">Build, test,<span className="block text-teal-700">understand, improve.</span></h2><p className="mt-5 text-base leading-8 text-slate-600">My approach is to get mechanics working early, understand their limitations, and improve their underlying systems as requirements become clearer.</p></div></Reveal><div className="space-y-4">{principles.map((principle, index) => <Reveal key={principle.number} delay={index * 60}><div className="flex gap-5 rounded-xl border border-slate-200 bg-white p-5 sm:p-6"><span className="font-mono text-sm font-semibold text-teal-700">{principle.number}</span><div><h3 className="text-base font-semibold text-slate-900">{principle.title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{principle.description}</p></div></div></Reveal>)}</div></div></PageContainer></section>

      <section className="bg-white py-16 sm:py-20"><PageContainer><Reveal><div className="rounded-3xl border border-slate-700 bg-[#172235] px-6 py-12 text-center sm:px-10 sm:py-16"><p className="section-label text-[#62E6CE]">Let&apos;s Connect</p><h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Interested in working together?</h2><p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">I&apos;m interested in gameplay programming, technical game systems, and interactive experiences. Feel free to explore my projects or reach out.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#62E6CE] px-6 py-3 text-sm font-semibold text-[#0B1120] transition hover:bg-[#8CF3E0]">Get in Touch ↗</Link><Link href="/projects" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-500 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#62E6CE]">Explore Projects →</Link></div></div></Reveal></PageContainer></section>
    </div>
  );
}
