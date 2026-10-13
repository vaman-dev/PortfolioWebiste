"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteData } from "@/data/site";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/#skills" },
  { label: "Approach", href: "/#approach" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const menuOpenRef = useRef(false);

  const closeMenu = (returnFocus = false) => {
    menuOpenRef.current = false;
    setMenuOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  };

  const toggleMenu = () => {
    menuOpenRef.current = !menuOpenRef.current;
    setMenuOpen(menuOpenRef.current);
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    firstLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!menuRef.current?.contains(target) && !buttonRef.current?.contains(target)) closeMenu();
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href.includes("#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between gap-4 md:h-[72px]">
        <Link href="/" onClick={() => closeMenu()} className="flex shrink-0 flex-col leading-tight">
          <span className="text-sm font-bold tracking-tight text-slate-950 sm:text-base">
            {siteData.name}<span className="text-teal-600">.</span>
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.13em] text-slate-500">
            Gameplay Programmer
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${active ? "text-teal-700" : "text-slate-600 hover:text-slate-950"}`}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a href={siteData.resumeUrl} target="_blank" rel="noopener noreferrer"
            className="hidden min-h-11 items-center justify-center rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white transition-colors hover:bg-slate-800 lg:inline-flex">
            View Resume <span className="ml-2" aria-hidden="true">↗</span>
          </a>
          <button ref={buttonRef} type="button" onClick={toggleMenu} aria-expanded={menuOpen}
            aria-controls="mobile-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-900 lg:hidden">
            <span className="text-xl" aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" ref={menuRef} aria-label="Mobile navigation" className="max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-slate-200 bg-white px-4 pb-6 pt-4 lg:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-1">
            {navLinks.map((link, index) => {
              const active = isActive(link.href);
              return (
                <Link ref={index === 0 ? firstLinkRef : undefined} key={link.href} href={link.href} onClick={() => closeMenu()} aria-current={active ? "page" : undefined}
                  className={`flex min-h-11 items-center rounded-lg px-4 py-3 text-sm font-medium ${active ? "bg-teal-50 text-teal-800" : "text-slate-700 hover:bg-slate-100"}`}>
                  {link.label}
                </Link>
              );
            })}
            <a href={siteData.resumeUrl} target="_blank" rel="noopener noreferrer" onClick={() => closeMenu()}
              className="mt-3 flex min-h-11 items-center justify-center rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
              View Resume ↗
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
