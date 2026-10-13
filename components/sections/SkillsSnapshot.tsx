import PageContainer from "@/components/layout/PageContainer";
import Reveal from "@/components/ui/Reveal";

export function LegacySkillsSnapshot() {
  const stats = [
    { title: "1.2 Years", description: "Unity Development" },
    { title: "6 Projects", description: "Gameplay & Interactive Systems" },
    { title: "XR", description: "AR / VR Prototypes" },
    { title: "C++ / C#", description: "Gameplay Programming" },
  ];

  return (
    <section className="section-space border-b border-slate-200 bg-slate-50">
      <PageContainer>
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Technical Foundations
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Systems-minded gameplay engineering with technical depth.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              I bridge creative vision and technical execution to ship performant, modular
              gameplay systems that support scale, iteration, and player feel.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div className="glass-panel rounded-xl p-4">
                  <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

const capabilities = [
  { number: "01", title: "Gameplay Systems", description: "Responsive mechanics, player interaction, and reusable gameplay architecture." },
  { number: "02", title: "Character Controllers", description: "Locomotion, state machines, animation integration, and foot placement." },
  { number: "03", title: "Interactive AI", description: "AI-driven NPCs, perception experiments, and real-time integrations." },
  { number: "04", title: "XR Development", description: "Immersive interaction prototypes and development using Meta XR tools." },
];

export default function SkillsSnapshot() {
  return (
    <section className="section-space border-b border-slate-200 bg-slate-50">
      <PageContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <Reveal>
            <div className="max-w-xl">
              <p className="section-label text-teal-700">Technical Foundations</p>
              <h2 className="section-heading mt-4 text-slate-950">Gameplay first.<span className="block text-slate-500">Engineering underneath.</span></h2>
              <p className="mt-5 text-base leading-8 text-slate-600">I approach game development by building systems that are understandable, maintainable, and satisfying to interact with. My focus spans gameplay programming, character movement, technical tools, and AI-enhanced experiences.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {capabilities.map((item, index) => (
              <Reveal key={item.number} delay={index * 75} className="h-full">
                <article className="surface-card flex h-full flex-col p-5 transition-colors duration-300 hover:border-teal-300">
                  <span className="text-xs font-bold tracking-widest text-teal-700">{item.number}</span>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
