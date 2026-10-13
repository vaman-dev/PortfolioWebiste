
import PageContainer from "@/components/layout/PageContainer";
import Reveal from "@/components/ui/Reveal";

const skillGroups = [
  {
    number: "01",
    title: "Gameplay Engineering",
    description: "Designing responsive and reusable gameplay systems.",
    skills: [
      "Character Controllers",
      "Finite State Machines",
      "Animation & Foot IK",
      "Physics-Based Gameplay",
    ],
  },
  {
    number: "02",
    title: "Programming",
    description: "Building maintainable, performance-conscious systems.",
    skills: ["C#", "C++", "Python", "Object-Oriented Design"],
  },
  {
    number: "03",
    title: "Game Engines",
    description: "Developing real-time interactive experiences.",
    skills: [
      "Unity (URP / HDRP)",
      "Unreal Engine 5",
    ],
  },
  {
    number: "04",
    title: "AI & Interactive Systems",
    description: "Connecting intelligent systems with real-time experiences.",
    skills: [
      "NPC AI Systems",
      "Vision Experiments",
      "Inference Integration",
      "Behavior Systems",
    ],
  },
  {
    number: "05",
    title: "XR & Development Tools",
    description: "Building immersive experiences and production workflows.",
    skills: [
      "Meta XR SDK",
      "Custom Editor Tools",
      "Version Control",
      "Debugging & Profiling",
    ],
  },
];

export default function WhatIBuild() {
  return (
    <section
      id="skills"
      className="showcase-section relative overflow-hidden pb-20 pt-12 sm:pb-24 sm:pt-16 lg:pb-28"
    >
      <PageContainer>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label showcase-label">
              Technical Arsenal
            </p>

            <h2 className="section-heading mt-4 text-slate-50">
              The tools behind the systems.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--showcase-muted)]">
              The engines, programming languages, and technical workflows I use to build interactive systems.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.number}
              delay={index * 75}
              className={`h-full ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
            >
              <article className="showcase-card flex h-full flex-col p-6 transition-colors duration-300 hover:border-[var(--showcase-accent)]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-[var(--showcase-accent)]">
                    {group.number}
                  </span>

                  <div
                    aria-hidden="true"
                    className="h-px w-12 bg-slate-700"
                  />
                </div>

                <h3 className="text-lg font-semibold text-[var(--showcase-text)]">
                  {group.title}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-[var(--showcase-muted)]">
                  {group.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-slate-600/50 bg-slate-800/60 px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
