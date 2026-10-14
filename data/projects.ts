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
    image: "/images/GridGame.png?v=2",
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
      "A Unity 6 runtime integration connecting Conversational AI, real-time NPC embodiment, WebRTC audio, and autonomous gameplay actions.",
    role: "Gameplay / AI Programmer",
    tech: ["Unity 6", "C#", "WebRTC", "LiveKit", "NPC Systems"],
    image: "/images/AI%20NPC%20EXPERIMENT.png",
    featured: true,
  },
  {
    slug: "advanced-third-person-controller",
    title: "VR Desert Experience — Soldier's Perspective",
    summary:
      "An immersive virtual reality environment created for an AIT sand-model presentation, helping communicate a remote desert landscape from a soldier's perspective.",
    role: "Programmer",
    tech: ["Unity", "Virtual Reality", "Environment Presentation", "AIT Sand Model"],
    image: "/images/VR%20Sand%20Model.png",
    featured: true,
  },
  {
    slug: "child-game",
    title: "ChildGame",
    summary:
      "A 2D educational coloring, tracing, and drawing game for preschool and early-learning audiences, built around touch interaction and guided creative play.",
    role: "Gameplay Programmer",
    tech: ["Unity", "C#", "ScriptableObjects", "RenderTextures", "Multi-touch"],
    image: "/images/ChildGame.png",
    featured: true,
  },
];
