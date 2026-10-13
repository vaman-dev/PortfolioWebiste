import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import Reveal from "@/components/ui/Reveal";

export function LegacyAboutPreview() {
  return (
    <section className="section-space bg-slate-50">
      <PageContainer>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Architectural Rigor
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Architecture that supports iteration.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              I separate input, state, movement, and presentation so gameplay systems can be
              tested, tuned, and extended without turning every change into a rewrite.
            </p>
          </div>

          <div className="surface-card p-5 sm:p-6">
            <p className="section-label text-teal-700">Controller architecture</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["01", "Unity Input System", "Read intent and buffer player input."],
                ["02", "Player State Machine", "Own transitions and movement states."],
                ["03", "Movement & Physics", "Resolve velocity, forces, and ground checks."],
                ["04", "Animation & IK", "Reflect movement and contact in the pose."],
              ].map(([number, title, description]) => (
                <div key={number} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <span className="text-xs font-bold tracking-widest text-teal-700">{number}</span>
                  <h3 className="mt-3 text-sm font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

const systems = [
  { number: "01", title: "Input Layer", detail: "Unity Input System", description: "Collects player intent and manages input buffering." },
  { number: "02", title: "State Coordination", detail: "Finite State Machine", description: "Controls movement states and valid transitions." },
  { number: "03", title: "Movement Simulation", detail: "Character Movement", description: "Processes velocity, gravity, and grounded behavior." },
  { number: "04", title: "Visual Presentation", detail: "Animation & IK", description: "Translates movement into responsive animation and foot placement." },
];

export default function AboutPreview() {
  return (
    <section id="architecture" className="bg-slate-50 pb-12 pt-20 sm:pb-16 sm:pt-24 lg:pt-28">
      <PageContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal>
            <div className="max-w-xl">
              <p className="section-label text-teal-700">Engineering Architecture</p>
              <h2 className="section-heading mt-4 text-slate-950">Good gameplay starts<span className="block text-teal-700">with good systems.</span></h2>
              <p className="mt-6 text-base leading-8 text-slate-600">Responsive gameplay requires more than implementing movement mechanics. Input, game state, simulation, and animation must work together without becoming tightly coupled.</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">I structure gameplay features around clear responsibilities so systems remain easier to debug, tune, extend, and reuse as the project grows.</p>
              <Link href="/about" className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-teal-800 transition-colors hover:text-teal-950">More About My Approach <span aria-hidden="true">↗</span></Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700">Architecture Concept</p><h3 className="mt-2 text-sm font-semibold text-slate-900">Gameplay Controller</h3></div><span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-[10px] font-semibold text-teal-800">Modular Design</span></div>
              <div className="mt-6 space-y-2">
                {systems.map((system, index) => (
                  <div key={system.number}>
                    <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-teal-200"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0B1120] font-mono text-xs font-bold text-[#62E6CE]">{system.number}</span><div className="min-w-0"><div className="flex flex-wrap items-center gap-x-3 gap-y-1"><h4 className="text-sm font-semibold text-slate-900">{system.title}</h4><span className="font-mono text-[10px] text-teal-700">{system.detail}</span></div><p className="mt-1 text-xs leading-5 text-slate-600">{system.description}</p></div></div>
                    {index < systems.length - 1 && <div aria-hidden="true" className="flex h-6 items-center justify-center"><div className="flex flex-col items-center"><div className="h-3 w-px bg-teal-300" /><span className="text-xs leading-none text-teal-600">↓</span></div></div>}
                  </div>
                ))}
              </div>
              <p className="mt-5 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">Simplified view of how input, state, simulation, and animation responsibilities can be separated in a gameplay controller.</p>
            </div>
          </Reveal>
        </div>
      </PageContainer>
    </section>
  );
}
