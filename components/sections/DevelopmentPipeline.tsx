import PageContainer from "@/components/layout/PageContainer";
import Reveal from "@/components/ui/Reveal";

const legacySteps = [
  {
    number: "01",
    title: "Define the mechanic",
    description: "Player goal, inputs, constraints, and success criteria.",
  },
  {
    number: "02",
    title: "Build the vertical slice",
    description: "A working implementation with a minimal gameplay loop.",
  },
  {
    number: "03",
    title: "Engineer the system",
    description: "Clear responsibilities, modular architecture, and testable behavior.",
  },
  {
    number: "04",
    title: "Test and profile",
    description: "Measure correctness, responsiveness, and performance.",
  },
  {
    number: "05",
    title: "Iterate on player feel",
    description: "Tune the implementation using actual playtesting.",
  },
];

export function LegacyDevelopmentPipeline() {
  return (
    <section className="section-space bg-slate-50">
      <PageContainer>
        <div className="text-center">
          <p className="section-label text-teal-700">
            Engineering workflow
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Iterative development
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            I turn gameplay ideas into working interactive systems through focused prototypes,
            deliberate engineering, and repeated playtesting.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-5 md:gap-3">
          {legacySteps.map((step, index) => (
            <div key={step.title} className="relative flex items-stretch">
              <Reveal delay={index * 100} className="h-full">
                <div className="glass-panel h-full rounded-2xl p-5 text-sm">
                  <p className="text-xs font-bold tracking-[0.2em] text-teal-700">{step.number}</p>
                  <h3 className="mt-4 font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-3 leading-6 text-slate-600">{step.description}</p>
                </div>
              </Reveal>
              {index < legacySteps.length - 1 ? (
                <div aria-hidden="true" className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-teal-500 md:block">
                  →
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

const workflowSteps = [
  { number: "01", title: "Define", description: "Identify the player goal, desired behavior, and technical constraints." },
  { number: "02", title: "Prototype", description: "Build a small playable version to validate the core mechanic." },
  { number: "03", title: "Engineer", description: "Refine the prototype into modular, maintainable gameplay systems." },
  { number: "04", title: "Validate", description: "Debug edge cases, test responsiveness, and profile performance." },
  { number: "05", title: "Iterate", description: "Use playtesting feedback to improve the mechanic and player feel." },
];

export default function DevelopmentPipeline() {
  return (
    <section id="approach" className="bg-slate-50 pb-20 pt-12 sm:pb-24 sm:pt-16 lg:pb-28">
      <PageContainer>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label text-teal-700">Development Process</p>
            <h2 className="section-heading mt-4 text-slate-950">From prototype to<span className="text-teal-700"> player experience.</span></h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">My development workflow focuses on validating mechanics early, building maintainable systems, and improving gameplay through testing and iteration.</p>
          </div>
        </Reveal>
        <div className="relative mt-12">
          <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-slate-300 lg:block" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {workflowSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 80} className="h-full">
                <article className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.04)]">
                  <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B1120] font-mono text-xs font-bold text-[#62E6CE]">{step.number}</div>
                  <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal><p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-7 text-slate-500">The process is iterative: testing and playtesting can send a feature back into prototyping or engineering whenever the experience needs improvement.</p></Reveal>
      </PageContainer>
    </section>
  );
}
