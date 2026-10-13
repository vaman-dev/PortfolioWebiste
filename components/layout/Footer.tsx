import Link from "next/link";
import { siteData } from "@/data/site";

export function LegacyFooter() {
  return (
    <footer className="border-t border-slate-800 bg-[#0B1120] text-slate-300">
      <div className="container-shell flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Gameplay Programmer Portfolio. Built with technical architecturalism.</p>

        <div className="flex items-center gap-4">
          <a href={siteData.socials.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={siteData.socials.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${siteData.email}`}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#0B1120] text-slate-300">
      <div className="container-shell py-10 sm:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="text-lg font-bold tracking-tight text-white">
              {siteData.name}<span className="text-[#62E6CE]">.</span>
            </Link>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Unity Gameplay Programmer building responsive gameplay systems,
              interactive tools, and AI-powered experiences.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-5 text-sm">
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-white">Explore</span>
              <Link href="/projects" className="hover:text-[#62E6CE]">Projects</Link>
              <Link href="/about" className="hover:text-[#62E6CE]">About</Link>
              <Link href="/contact" className="hover:text-[#62E6CE]">Contact</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-white">Connect</span>
              <a href={siteData.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#62E6CE]">GitHub ↗</a>
              <a href={siteData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#62E6CE]">LinkedIn ↗</a>
              <a href={`mailto:${siteData.email}`} className="hover:text-[#62E6CE]">Email ↗</a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteData.name}. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
