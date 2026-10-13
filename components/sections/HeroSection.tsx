import Image from "next/image";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import Tag from "@/components/ui/Tag";
import { siteData } from "@/data/site";
import { projects } from "@/data/projects";

export function LegacyHeroSection() {
  return (
    <section className="hero-grid relative overflow-hidden border-b border-slate-200 bg-white">
      <PageContainer className="relative section-space">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div className="max-w-3xl py-10 md:py-20 hero-slide-left">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Game Systems • AI • XR
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Gameplay Programmer
              <br />& Game Developer
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Building interactive systems, player controllers, AI behaviors, and immersive game
              experiences using Unity, Unreal Engine, C++, and C#.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Unity", "Unreal Engine", "C#", "C++", "Gameplay Systems", "XR/VR"].map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hero-slide-right">
            <div className="rounded-lg bg-slate-900 p-4 text-xs text-slate-100">
              <div className="flex items-center gap-2 text-[10px] text-slate-400">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span>PlayerController.cpp</span>
              </div>
              <pre className="mt-3 whitespace-pre-wrap font-mono leading-relaxed">
{`void Player::Tick(float DeltaTime) {
  Input::Tick(DeltaTime);
  HandleMovement(DeltaTime);
  ProcessInputBuffer();
}`}
              </pre>
            </div>
            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
<Image
  src="/images/PortfolioImage.png"
  alt="Portrait of Apoorva"
  fill
  sizes="(max-width: 768px) 70vw, 260px"
  className="object-cover"
/>
              </div>
              <div className="mt-3 text-center">
<p className="text-sm font-semibold text-slate-900">Apoorva</p>
<p className="text-xs text-slate-500">Gameplay Programmer</p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default function HeroSection() {
  const showcasedProject = projects.find((project) => project.slug === "grid-based-builder-system") ?? projects[0];

  return (
    <section className="hero-grid relative overflow-hidden border-b border-slate-200 bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-teal-100/40 blur-3xl" />
      <PageContainer className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="hero-slide-left">
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-teal-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-800">{siteData.role}</span>
            </div>
            <h1 className="mt-7 max-w-3xl text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.045em] text-slate-950">
              Engineering gameplay<span className="block text-teal-700">that feels alive.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">{siteData.shortIntro} using Unity and C#.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Gameplay Systems", "Unity / C#", "Character Controllers", "Interactive AI"].map((skill) => (
                <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700">{skill}</span>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/projects" className="btn-primary">Explore My Work <span aria-hidden="true">↗</span></Link>
              <a href={siteData.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">View Resume <span aria-hidden="true">↗</span></a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200 pt-6">
              <div><p className="text-sm font-semibold text-slate-900">Gameplay Engineering</p><p className="mt-1 text-xs text-slate-500">Systems, animation and interaction</p></div>
              <div className="hidden h-9 w-px bg-slate-200 sm:block" />
              <div><p className="text-sm font-semibold text-slate-900">AI + Real-Time Systems</p><p className="mt-1 text-xs text-slate-500">NPCs, perception and integration</p></div>
            </div>
          </div>

          <div className="hero-slide-right min-w-0">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
              <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3">
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-red-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /><span className="h-2.5 w-2.5 rounded-full bg-green-400" /></div>
                <span className="truncate font-mono text-[10px] uppercase tracking-wider text-slate-500">Gameplay / Technical Showcase</span>
              </div>
              {showcasedProject && <Link href={`/projects/${showcasedProject.slug}`} className="group block">
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <Image src={showcasedProject.image} alt={`${showcasedProject.title} gameplay screenshot`} fill priority sizes="(max-width: 1023px) 100vw, 45vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none" />
                  <div className="absolute bottom-3 left-3 rounded-md border border-white/20 bg-slate-950/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white">Project Showcase</div>
                </div>
                <div className="flex items-center justify-between gap-3 bg-[#0B1120] p-4 sm:p-5">
                  <div className="min-w-0"><p className="text-[10px] font-semibold uppercase tracking-widest text-[#62E6CE]">Selected Engineering Work</p><h2 className="mt-2 text-base font-semibold text-white sm:text-lg">{showcasedProject.title}</h2><p className="mt-1 text-xs text-slate-400">{showcasedProject.role}</p></div>
                  <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-600 text-[#62E6CE]">↗</span>
                </div>
              </Link>}
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-slate-100"><Image src="/images/PortfolioImage.png" alt="Portrait of Apoorva" fill sizes="56px" className="object-cover" /></div>
              <div className="min-w-0"><p className="text-sm font-semibold text-slate-900">{siteData.name}</p><p className="text-xs text-slate-500">{siteData.role}</p></div>
              <Link href="/about" className="ml-auto shrink-0 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50">About Me ↗</Link>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
