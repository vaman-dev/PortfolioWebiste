import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";
import Link from "next/link";

export default function SequenceMemoryGamePage() {
  return (
    <section className="section-space">
      <PageContainer>
        {/* Back Link
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            ← Back to Projects
          </Link>
          <a
            href="https://youtu.be/JoEJ0ag1Pxg?si=MoMj_rcqwA8hcocp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Watch Gameplay Video
          </a>
        </div> */}

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-4">
          Global Game Jam 2025 - Bubbleton
        </h1>

        {/* Subtitle / Intro */}
        <p className="text-lg text-slate-600 max-w-3xl mb-12 leading-7">
          A color-sequence interaction game built during Global Game Jam 2025 with feedback systems, countdown flow, and child-friendly UX tuning.
        </p>

        {/* Meta Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8 mb-10">
          <div>
            <p className="text-sm text-slate-500 mb-2">Role</p>
            <p className="text-slate-900 font-semibold">Gameplay Programmer</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-2">Technologies</p>
            <p className="text-slate-900 font-semibold">Unity, C#</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-2">Focus Areas</p>
            <p className="text-slate-900 font-semibold">
              UI Systems, Gameplay Loop, Game Jam Prototype
            </p>
          </div>
        </div>

        <div className="relative mb-12 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <Image
            src="/images/GlobalGame-jam.png"
            alt="Global Game Jam 2025 - Bubbleton project screenshot"
            width={1200}
            height={675}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        {/* Full Description */}
        <div className="max-w-3xl space-y-6 text-slate-600 leading-7 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">The Project</h2>
            <p>
              Bubbleton was created during Global Game Jam 2025 at UnderDogs Studio. This was my first game
              jam, and it gave me hands-on experience with building a playable game under time constraints,
              collaborating in a fast-paced environment, and turning a simple gameplay idea into a working
              prototype.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">My Contribution</h2>
            <p>
              I developed the complete UI flow for the game and implemented the first phase of the gameplay
              system, including the password-input sequence and related interaction flow. During the jam, I
              also learned how Git and GitHub are used in a team-based development workflow.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Key Learnings</h2>
            <p>
              Global Game Jam 2025 helped me understand how game jams work, how quickly teams need to make
              decisions, and how important it is to build simple playable systems first. I learned the basics
              of using GitHub in a collaborative project, implemented my first official game jam code, and
              experienced the reality of surviving a game jam on caffeine and focus.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-8 mt-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Built Systems</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">→</span>
                <span>UI flow and screen transitions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">→</span>
                <span>Password-input interaction sequence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">→</span>
                <span>Countdown and gameplay feedback flow</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">→</span>
                <span>Child-friendly user experience tuning</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Video */}
        <div className="w-full h-96 rounded-lg overflow-hidden mb-12">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/JoEJ0ag1Pxg"
            title="Global Game Jam 2025 - Bubbleton Gameplay"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        {/* CTA */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-slate-500 mb-4">Want to discuss this project or similar work?</p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Get In Touch
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
