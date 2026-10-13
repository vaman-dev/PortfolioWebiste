export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  tech: string[];
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "grid-based-builder-system",
    title: "Grid-Based Builder System",
    summary:
      "A Unity prototype exploring grid placement, multi-tile building logic, rotation-aware footprints, and data-driven architecture for builder-style gameplay systems.",
    role: "Gameplay Systems Programmer",
    tech: ["Unity", "C#", "Grid Systems", "ScriptableObjects"],
    image: "/images/grid-based-builder.png",
    featured: true,
  },
  {
    slug: "sequence-memory-game",
    title: "Global Game Jam 2025 - Bubbleton",
    summary:
      "A color-sequence interaction game built during Global Game Jam 2025, featuring UI systems, countdown flow, and child-friendly gameplay feedback.",
    role: "Gameplay Programmer",
    tech: ["Unity", "C#", "UI Systems", "Gameplay Loop", "Game Jam"],
    image: "/images/GlobalGame-jam.png",
    featured: true,
  },
  {
    slug: "ai-npc-experiments",
    title: "AI NPC Experiments",
    summary:
      "Prototype work exploring AI-enhanced gameplay interactions, behavior systems, and intelligent player responses.",
    role: "Gameplay / AI Programmer",
    tech: ["Unity", "Python", "AI Integration", "NPC Systems"],
    image: "/images/GridGame.png",
    featured: true,
  },
  {
    slug: "advanced-third-person-controller",
    title: "Advanced Third Person Controller",
    summary:
      "Physics-based movement system featuring procedural vaulting, dynamic foot placement, and predictive landing systems.",
    role: "Gameplay Systems Engineer",
    tech: ["Unity", "C#", "Animation Rigging", "IK"],
    image: "/images/GridGame.png",
    featured: true,
  },
];