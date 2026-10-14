"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const show = () => node.classList.add("reveal-visible");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      const frame = window.requestAnimationFrame(show);
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.clearTimeout(fallbackTimer);
          show();
          observer.unobserve(node);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -24px 0px" }
    );

    observer.observe(node);
    const fallbackTimer = window.setTimeout(show, 800);

    return () => {
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={["reveal", className].join(" ")}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
