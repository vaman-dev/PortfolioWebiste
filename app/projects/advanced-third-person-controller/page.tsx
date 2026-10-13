import Image from "next/image";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

export default function AdvancedThirdPersonControllerPage() {
  return (
    <section className="section-space">
      <PageContainer>
        <Link
          href="/projects"
          className="mb-8 inline-block text-violet-400 transition-colors hover:text-violet-300"
        >
          ← Back to Projects
        </Link>

        <h1 className="mb-4 text-5xl font-semibold text-white md:text-6xl">
          Advanced Third Person Controller
        </h1>

        <p className="mb-12 max-w-3xl text-xl leading-8 text-neutral-300">
          A physics-based movement system exploring procedural vaulting, dynamic
          foot placement, and predictive landing systems.
        </p>

        <div className="mb-12 grid grid-cols-1 gap-6 border-t border-neutral-700 pt-8 md:grid-cols-3">
          <div>
            <p className="mb-2 text-sm text-neutral-400">Role</p>
            <p className="font-semibold text-white">Gameplay Systems Engineer</p>
          </div>
          <div>
            <p className="mb-2 text-sm text-neutral-400">Technologies</p>
            <p className="font-semibold text-white">Unity, C#, Animation Rigging, IK</p>
          </div>
          <div>
            <p className="mb-2 text-sm text-neutral-400">Focus Areas</p>
            <p className="font-semibold text-white">Movement, Animation, Physics</p>
          </div>
        </div>

        <div className="mb-12 h-96 w-full overflow-hidden rounded-lg">
          <Image
            src="/images/GridGame.png"
            alt="Advanced Third Person Controller"
            width={900}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="max-w-3xl space-y-6 leading-8 text-neutral-300">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">The Project</h2>
            <p>
              This prototype explores responsive third-person movement and the
              systems needed to make traversal feel grounded, expressive, and
              reliable during moment-to-moment gameplay.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Technical Focus
            </h2>
            <p>
              The controller combines physics-aware movement, procedural vaulting,
              predictive landing checks, dynamic foot placement, and animation
              rigging to connect player input with believable character motion.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-neutral-700 pt-8">
          <p className="mb-4 text-neutral-400">
            Want to discuss this project or similar work?
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            Get In Touch
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
